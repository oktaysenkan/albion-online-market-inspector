import { LocalizedDescriptions } from './LocalizedDescriptions';
import { LocalizedNames } from './LocalizedNames';

export interface Item {
  LocalizationNameVariable: string;
  LocalizationDescriptionVariable: string;
  LocalizedNames?: LocalizedNames;
  LocalizedDescriptions?: LocalizedDescriptions;
  Index: string;
  UniqueName: string;
}
