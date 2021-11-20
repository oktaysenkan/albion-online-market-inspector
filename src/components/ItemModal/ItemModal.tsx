import React, { useMemo } from 'react';
import { Badge, Loading, Modal, Table } from '@geist-ui/react';

import { useItemPrices } from 'src/queries/items.queries';

import { getEnchantment, getTier } from 'src/utils/items';

import { InputModalProps } from 'src/interfaces/components/InputModal/InputModal';

import './ItemModal.scss';

const ItemModal: React.FC<InputModalProps> = ({
  open,
  onClose,
  selectedItem,
}): React.ReactElement => {
  const { data, isLoading, isError } = useItemPrices(selectedItem.UniqueName);

  const itemName = selectedItem.LocalizedNames?.['EN-US'];
  const tier = `T${getTier(selectedItem)}.${getEnchantment(selectedItem)}`;

  const blackMarketPrices = useMemo(() => {
    if (!data) {
      return [];
    }

    return data
      .filter((item) => item.city === 'Black Market')
      .filter((item) => item.maximumBuyPrice);
  }, [data]);

  const cityPrices = useMemo(() => {
    if (!data) {
      return [];
    }

    return data
      .filter((item) => item.city !== 'Black Market')
      .filter((item) => item.minimumSellPrice);
  }, [data]);

  if (!selectedItem) return <></>;

  return (
    <Modal width="800px" open={open} onClose={onClose}>
      <Modal.Title className="title">
        {itemName}

        <Badge className="badge" size="mini">
          {tier}
        </Badge>
      </Modal.Title>

      {data ? (
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
      ) : isLoading ? (
        <Loading />
      ) : (
        isError && <div>error</div>
      )}

      <Modal.Action size="small" onClick={onClose}>
        Close
      </Modal.Action>
    </Modal>
  );
};

export default ItemModal;
