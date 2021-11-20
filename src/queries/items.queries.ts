import { useQuery, UseQueryResult } from 'react-query';

import { getAllItems, getItemPrice } from 'src/services/items/items';

import { transformItemPrice } from 'src/utils/items';

import { Item } from 'src/interfaces/models/Item';
import { Price } from 'src/interfaces/models/Price';

export const useAllItems = (): UseQueryResult<Item[], unknown> =>
  useQuery(['allItems'], async () => {
    const { data } = await getAllItems();

    return data;
  });

export const useItemPrices = (uniqueName: string): UseQueryResult<Price[], unknown> =>
  useQuery(['item', uniqueName, 'price'], async () => {
    const { data } = await getItemPrice(uniqueName);

    return transformItemPrice(data);
  });
