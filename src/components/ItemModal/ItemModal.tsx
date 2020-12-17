import React, { useEffect, useState } from 'react';
import { Badge, Loading, Modal, Table } from '@geist-ui/react';
import { useRecoilState } from 'recoil';

import { selectedItem as selectedItemState } from 'src/store/item/atoms';

import http from 'src/utils/http';
import { getEnchantment, getTier, transformItemPrice } from 'src/utils/items';

import { ItemPrice } from 'src/interfaces/models/ItemPrice';
import { Price } from 'src/interfaces/models/Price';
import { InputModalProps } from 'src/interfaces/components/InputModal/InputModal';

import './ItemModal.scss';

const ItemModal: React.FC<InputModalProps> = ({ open, onClose }): React.ReactElement => {
  const [selectedItem] = useRecoilState(selectedItemState);
  const [prices, setPrices] = useState<Price[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!selectedItem) return;

    const getPrices = async () => {
      setLoading(true);

      const { data: response } = await http.get<ItemPrice[]>(
        `stats/prices/${selectedItem.UniqueName}?qualities=1,2,3,4,5`,
      );

      const transformedPrices = transformItemPrice(response);

      setPrices(transformedPrices);

      setLoading(false);
    };

    console.log(selectedItem);

    getPrices();
  }, [selectedItem]);

  if (!selectedItem) return <></>;

  const itemName = selectedItem.LocalizedNames?.['EN-US'];
  const tier = `T${getTier(selectedItem)}.${getEnchantment(selectedItem)}`;

  const blackMarketPrices = prices
    .filter((item) => item.city === 'Black Market')
    .filter((item) => item.maximumBuyPrice);

  const cityPrices = prices
    .filter((item) => item.city !== 'Black Market')
    .filter((item) => item.minimumSellPrice);

  return (
    <Modal width="800px" open={open} onClose={onClose}>
      <Modal.Title className="title">
        {itemName}

        <Badge className="badge" size="mini">
          {tier}
        </Badge>
      </Modal.Title>

      {loading ? (
        <Loading />
      ) : (
        <div className="prices">
          {cityPrices.length > 0 && (
            <Table data={cityPrices}>
              <Table.Column prop="city" label="city" />
              <Table.Column prop="quality" label="quality" />
              <Table.Column prop="minimumSellPrice" label="Min Sell Price" />
              <Table.Column prop="minimumSellPriceDate" label="Last Updated" />
            </Table>
          )}

          {blackMarketPrices.length > 0 && (
            <Table data={blackMarketPrices}>
              <Table.Column prop="city" label="city" />
              <Table.Column prop="quality" label="quality" />
              <Table.Column prop="maximumBuyPrice" label="Max Buy Price" />
              <Table.Column prop="maximumBuyPriceDate" label="Last Updated" />
            </Table>
          )}

          {blackMarketPrices.length < 1 && cityPrices.length < 1 && <p>No price available</p>}
        </div>
      )}

      <Modal.Action size="small" onClick={onClose}>
        Close
      </Modal.Action>
    </Modal>
  );
};

export default ItemModal;
