import React, { memo } from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { uniqueId } from 'lodash';

import { Item } from 'src/interfaces/models/Item';

import SearchResult from '../SearchResult/SearchResult';
import SearchResultSkeleton from '../SearchResult/SearchResultSkeleton';

import './SearchResults.scss';

export interface SearchResultsProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  data: T[];
  onItemClick: (item: T) => void;
  loading: boolean;
}

const SearchResults = React.forwardRef<List, SearchResultsProps<Item>>(
  ({ data, onItemClick, loading }, ref) => {
    return (
      <>
        {loading ? (
          <>
            {Array(10)
              .fill(1)
              .map(() => (
                <SearchResultSkeleton key={uniqueId()} />
              ))}
          </>
        ) : (
          <AutoSizer>
            {({ height, width }) => (
              <>
                <List
                  ref={ref}
                  className="search-results"
                  height={height}
                  itemCount={data.length}
                  itemSize={116}
                  width={width}
                >
                  {({ index, style }) => (
                    <SearchResult
                      style={style}
                      key={data[index].UniqueName}
                      item={data[index]}
                      onClick={() => onItemClick(data[index])}
                    />
                  )}
                </List>
              </>
            )}
          </AutoSizer>
        )}
      </>
    );
  },
);

SearchResults.displayName = 'SearchResults';

export default memo(SearchResults);
