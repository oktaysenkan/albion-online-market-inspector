import * as React from 'react';
import Fuse from 'fuse.js';

import { Item } from 'src/interfaces/models/Item';
import { getEnchantment, getTier } from 'src/utils/items';

const useSearch = ({
  list = [],
  itemName,
  selectedEnchantment,
  selectedTier,
}: {
  list: Item[] | undefined;
  itemName: string;
  selectedEnchantment: string;
  selectedTier: string;
}): Item[] => {
  const fuse = React.useMemo(() => {
    const fuseOptions = {
      includeScore: true,
      keys: ['LocalizedNames.EN-US'],
    };

    return new Fuse<Item>(list, fuseOptions);
  }, [list]);

  const searchResults = React.useMemo(() => {
    return itemName.length > 0 ? fuse.search(itemName).map((item) => item.item) : list;
  }, [itemName, fuse, list]);

  const haveNameItems = React.useMemo(() => {
    return searchResults.filter((item) => item.LocalizedNames?.['EN-US']);
  }, [searchResults]);

  const enchantmentSearchResults = React.useMemo(() => {
    return haveNameItems.filter((item) => {
      const itemEnchantment = getEnchantment(item);

      return selectedEnchantment ? Number(selectedEnchantment) === itemEnchantment : true;
    });
  }, [haveNameItems, selectedEnchantment]);

  const tierSearchResults = React.useMemo(() => {
    return enchantmentSearchResults.filter((item) => {
      const itemTier = getTier(item);

      return selectedTier ? Number(selectedTier) === itemTier : true;
    });
  }, [enchantmentSearchResults, selectedTier]);

  return tierSearchResults;
};

export default useSearch;
