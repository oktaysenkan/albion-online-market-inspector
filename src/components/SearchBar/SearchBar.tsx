import React from 'react';
import { Input, Select } from '@geist-ui/react';

import { SearchBarProps } from 'src/interfaces/components/SearchBar/SearchBar';

import './SearchBar.scss';

const SearchBar: React.FC<SearchBarProps> = ({
  itemName,
  onItemNameChange,
  onTierChange,
  onEnchantmentChange,
}): React.ReactElement => {
  return (
    <div className="search-bar">
      <Input
        className="input"
        size="mini"
        clearable
        placeholder="Item name"
        value={itemName}
        onChange={onItemNameChange}
      />

      <Select className="input" size="small" placeholder="Tier" onChange={onTierChange}>
        <Select.Option value="all">All</Select.Option>
        <Select.Option value="1">Tier 1</Select.Option>
        <Select.Option value="2">Tier 2</Select.Option>
        <Select.Option value="3">Tier 3</Select.Option>
        <Select.Option value="4">Tier 4</Select.Option>
        <Select.Option value="5">Tier 5</Select.Option>
        <Select.Option value="6">Tier 6</Select.Option>
        <Select.Option value="7">Tier 7</Select.Option>
        <Select.Option value="8">Tier 8</Select.Option>
      </Select>

      <Select
        className="input"
        size="small"
        placeholder="Enchantment"
        onChange={onEnchantmentChange}
      >
        <Select.Option value="all">All</Select.Option>
        <Select.Option value="0">0</Select.Option>
        <Select.Option value="1">1</Select.Option>
        <Select.Option value="2">2</Select.Option>
        <Select.Option value="3">3</Select.Option>
      </Select>
    </div>
  );
};

export default SearchBar;
