import { AxiosResponse } from 'axios';

import http from 'src/utils/http';

import { Item } from 'src/interfaces/models/Item';
import { ItemPrice } from 'src/interfaces/models/ItemPrice';

export const getAllItems = (): Promise<AxiosResponse<Item[]>> => {
  return http.get(
    'https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/formatted/items.json',
  );
};

export const getItemImageURL = (item: Item): string => {
  return `https://render.albiononline.com/v1/item/${item.UniqueName}.png`;
};

export const getItemPrice = (uniqueName: string): Promise<AxiosResponse<ItemPrice[]>> => {
  return http.get<ItemPrice[]>(`stats/prices/${uniqueName}?qualities=1,2,3,4,5`);
};
