import { Item } from 'src/interfaces/models/Item';

type NativeProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>;

export interface SearchResultProps extends NativeProps {
  item: Item;
  onClick?: (item: Item) => void;
}
