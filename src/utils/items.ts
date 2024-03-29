import * as timeago from 'timeago.js';
import moment from 'moment';
import millify from 'millify';

import { ItemPrice } from 'src/interfaces/models/ItemPrice';
import { Price } from 'src/interfaces/models/Price';
import { Item } from 'src/interfaces/models/Item';

/**
 *
 * Converts `T8_MAIN_1HCROSSBOW@3` to `3`
 *
 * @param item Item
 * @returns Enchantment of item
 */
export const getEnchantment = (item: Item): number => {
  const enchantment = item.UniqueName.slice(-2);

  const isHaveEnchantment = enchantment[0] === '@';

  const enchantmentLevel = isHaveEnchantment ? Number(enchantment[1]) : 0;

  return enchantmentLevel;
};

/**
 *
 * Converts `T8_MAIN_1HCROSSBOW@3` to `8`
 *
 * @param item Item
 * @returns Tier of item
 */
export const getTier = (item: Item): number => {
  const tier = item.UniqueName.substring(0, 2);

  const tierLevel = tier[1];

  const isHaveTier = Number.isInteger(Number(tierLevel));

  const itemTier = isHaveTier ? Number(tierLevel) : 0;

  return itemTier;
};

/**
 *
 * Converts `1` to `Normal`
 *
 * @param quality number
 * @returns Human-readable quality
 */
export const itemQualityToString = (quality: number): string => {
  switch (quality) {
    case 1:
      return 'Normal';

    case 2:
      return 'Good';

    case 3:
      return 'Outstanding';

    case 4:
      return 'Excellent';

    case 5:
      return 'Masterpiece';

    default:
      throw new Error('Invalid quality value');
  }
};

/**
 *
 * Converts from
 *
 * buy_price_max: 31000000
 * buy_price_max_date: "2021-11-08T08:00:00"
 * buy_price_min: 31000000
 * buy_price_min_date: "2021-11-08T08:00:00"
 * city: "Thetford"
 * item_id: "T8_OFF_LAMP_UNDEAD@3"
 * quality: 5
 * sell_price_max: 49777330
 * sell_price_max_date: "2021-11-08T02:50:00"
 * sell_price_min: 46500000
 * sell_price_min_date: "2021-11-08T02:50:00"
 *
 * to
 *
 * city: "Thetford"
 * maximumBuyPrice: "31m"
 * maximumBuyPriceDate: "7 hours ago"
 * minimumSellPrice: "46.5m"
 * minimumSellPriceDate: "13 hours ago"
 * quality: "Masterpiece"
 *
 * @param itemPrices Item prices
 * @returns Prices
 */
export const transformItemPrice = (itemPrices: ItemPrice[]): Price[] => {
  return itemPrices.map((item) => {
    const isValidDate = (date: Date) => {
      return moment(date).isAfter(moment('0001-01-01'));
    };

    const transformPrice = (price: number) => {
      if (!price) {
        return '';
      }

      return millify(price, {
        precision: 2,
        lowercase: true,
      });
    };

    const transformDate = (date: Date) => {
      const utcDate = moment.utc(date).toDate();

      return isValidDate(date) ? timeago.format(utcDate) : '';
    };

    return {
      city: item.city,
      quality: itemQualityToString(item.quality),
      minimumSellPrice: transformPrice(item.sell_price_min),
      minimumSellPriceDate: transformDate(item.sell_price_min_date),
      maximumBuyPrice: transformPrice(item.buy_price_max),
      maximumBuyPriceDate: transformDate(item.buy_price_max_date),
    };
  });
};
