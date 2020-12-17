export interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  itemName: string;
  onItemNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTierChange: (value: string | string[]) => void;
  onEnchantmentChange: (value: string | string[]) => void;
}
