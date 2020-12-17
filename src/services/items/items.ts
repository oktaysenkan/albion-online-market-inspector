import { AxiosResponse } from 'axios';
import { Item } from 'src/interfaces/models/Item';
import http from 'src/utils/http';

export const getAllItems = (): Promise<AxiosResponse<Item[]>> => {
  return http.get(
    'https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/formatted/items.json',
  );
};

export const getItemImageURL = (item: Item): string => {
  return `https://render.albiononline.com/v1/item/${item.UniqueName}.png`;
};
