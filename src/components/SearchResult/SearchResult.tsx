import { Card } from '@geist-ui/react';
import React from 'react';

import { getItemImageURL } from 'src/services/items/items';

import { SearchResultProps } from 'src/interfaces/components/SearchResult/SearchResult';

import './SearchResult.scss';

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
