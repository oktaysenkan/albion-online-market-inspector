import { Item } from 'src/interfaces/models/Item';

export interface InputModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  selectedItem: Item;
}
