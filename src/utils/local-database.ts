import * as localForage from 'localforage';
import Fuse from 'fuse.js';

import { Item } from 'src/interfaces/models/Item';
import { getAllItems } from 'src/services/items/items';

class LocalDatabase {
  private fuse: Fuse<Item>;
  items: Item[] = [];
  private onItemsLoadedTrigger?: (items: Item[]) => void;

  fuseOptions = {
    includeScore: true,
    keys: ['LocalizedNames.EN-US'],
  };

  constructor() {
    localForage.config({
      driver: localForage.INDEXEDDB,
      name: 'albion-online-market-inspector',
      version: 1.0,
      storeName: 'items',
      description: 'Albion Online item list',
    });

    this.fuse = new Fuse([], this.fuseOptions);

    this.initialize();
  }

  private async initialize() {
    let updatedItems;
    let cachedItems;

    try {
      const { data } = await getAllItems();

      updatedItems = data;
    } catch (error) {}

    try {
      cachedItems = await this.getItems();
    } catch (error) {}

    try {
      this.items = updatedItems || cachedItems || [];

      this.fuse.setCollection(this.items);

      if (updatedItems) {
        localForage.setItem<Item[]>('items', updatedItems);
      }

      this.onItemsLoadedTrigger && this.onItemsLoadedTrigger(this.items);
    } catch (error) {}
  }

  private async getItems() {
    return await localForage.getItem<Item[]>('items');
  }

  onItemsLoaded(func: (items: Item[]) => void) {
    this.onItemsLoadedTrigger = func;
  }

  search = (itemName: string) => this.fuse.search<Item>(itemName);
}

export default new LocalDatabase();
