import { Card } from '@geist-ui/react';
import React from 'react';

import { getItemImageURL } from 'src/services/items/items';

import './SearchResult.scss';
import { Item } from 'src/interfaces/models/Item';

type NativeProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>;

export interface SearchResultProps extends NativeProps {
  item: Item;
  onClick?: (item: Item) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({
  item,
  style,
  onClick,
}): React.ReactElement => {
  return (
    <div style={style} onClick={() => onClick && onClick(item)}>
      <Card className="card" hoverable>
        <div className="search-result">
          <div className="item-image">
            <img alt="item" src={getItemImageURL(item)} />
          </div>

          <div className="item-name">
            <h5>{item.LocalizedNames?.['EN-US']}</h5>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SearchResult;
