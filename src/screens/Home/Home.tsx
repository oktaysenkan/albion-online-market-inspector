import { Loading, useModal } from '@geist-ui/react';
import React, { createRef, useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { useRecoilState } from 'recoil';

import { selectedItem as selectedItemState } from 'src/store/item/atoms';

import ItemModal from 'src/components/ItemModal/ItemModal';
import SearchBar from 'src/components/SearchBar/SearchBar';
import SearchResults from 'src/components/SearchResults/SearchResults';

import localDatabase from 'src/utils/local-database';
import { getEnchantment, getTier } from 'src/utils/items';

import { Item } from 'src/interfaces/models/Item';

import './Home.scss';

const Home = (): React.ReactElement => {
  const [itemName, setItemName] = useState('');
  const [selectedEnchantment, setSelectedEnchantment] = useState('');
  const [selectedTier, setSelectedTier] = useState('');

  const [loading, setLoading] = useState(true);

  const [searchResults, setSearchResults] = useState<Item[]>([]);

  const windowRef = createRef<List>();

  const [, setSelectedItem] = useRecoilState(selectedItemState);
  const { setVisible, visible } = useModal();

  const handleItemsLoaded = () => {
    setLoading(false);
  };

  useEffect(() => {
    const trigger = localDatabase.onItemsLoaded(handleItemsLoaded);

    return trigger;
  }, []);

  useEffect(() => {
    console.log(localDatabase.items);

    const searchResults =
      itemName.length > 0
        ? localDatabase.search(itemName).map((item) => item.item)
        : localDatabase.items;

    const haveNameItems = searchResults.filter((item) => item.LocalizedNames?.['EN-US']);

    const enchantmentSearchResults = haveNameItems.filter((item) => {
      const itemEnchantment = getEnchantment(item);

      return selectedEnchantment ? Number(selectedEnchantment) === itemEnchantment : true;
    });

    const tierSearchResults = enchantmentSearchResults.filter((item) => {
      const itemTier = getTier(item);

      return selectedTier ? Number(selectedTier) === itemTier : true;
    });

    setSearchResults(tierSearchResults);
  }, [itemName, selectedEnchantment, selectedTier, loading]);

  useEffect(() => {
    windowRef.current?.scrollTo(0);

    // eslint-disable-next-line
  }, [searchResults]);

  const handleItemNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(event.currentTarget.value);
  };

  const handleTierChange = (value: string | string[]) => {
    const tier = value === 'all' ? '' : value;

    setSelectedTier(tier as string);
  };

  const handleEnchantmentChange = (value: string | string[]) => {
    const enchantment = value === 'all' ? '' : value;

    setSelectedEnchantment(enchantment as string);
  };

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    setVisible(true);
  };

  const handleModalClose = () => {
    setVisible(false);
  };

  return (
    <div className="home">
      <SearchBar
        onTierChange={handleTierChange}
        onEnchantmentChange={handleEnchantmentChange}
        onItemNameChange={handleItemNameChange}
        itemName={itemName}
      />

      <ItemModal onClose={handleModalClose} open={visible} />

      {!loading ? (
        <SearchResults ref={windowRef} data={searchResults} onItemClick={handleItemClick} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
