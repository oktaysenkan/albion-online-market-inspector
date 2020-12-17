import { atom } from 'recoil';

import { Item } from 'src/interfaces/models/Item';

export const selectedItem = atom<Item | undefined>({
  key: 'selectedItem',
  default: undefined,
});
