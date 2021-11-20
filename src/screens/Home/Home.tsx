import { Display, Note, useModal } from '@geist-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { useRecoilState } from 'recoil';

import { selectedItem as selectedItemState } from 'src/store/item/atoms';

import ItemModal from 'src/components/ItemModal/ItemModal';
import SearchBar from 'src/components/SearchBar/SearchBar';
import SearchResults from 'src/components/SearchResults/SearchResults';

import { Item } from 'src/interfaces/models/Item';

import useSearch from 'src/hooks/useSearch';
import { useAllItems } from 'src/queries/items.queries';

import './Home.scss';
import SearchResultSkeleton from 'src/components/SearchResult/SearchResultSkeleton';

const Home = (): React.ReactElement => {
  const windowRef = useRef<List>(null);

  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);

  const [itemName, setItemName] = useState('');
  const [selectedEnchantment, setSelectedEnchantment] = useState('');
  const [selectedTier, setSelectedTier] = useState('');
  const { setVisible, visible } = useModal();

  const { data, isLoading, isError } = useAllItems();

  const searchResults = useSearch({
    list: data,
    itemName,
    selectedEnchantment,
    selectedTier,
  });

  useEffect(() => {
    windowRef.current?.scrollTo(0);
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

      {selectedItem && (
        <ItemModal onClose={handleModalClose} open={visible} selectedItem={selectedItem} />
      )}

      {data || isLoading ? (
        <SearchResults
          ref={windowRef}
          loading={isLoading}
          data={searchResults}
          onItemClick={handleItemClick}
        />
      ) : (
        isError && (
          <Display shadow>
            <Note type="error" label={false} filled>
              An error accured
            </Note>
          </Display>
        )
      )}
    </div>
  );
};

export default Home;
