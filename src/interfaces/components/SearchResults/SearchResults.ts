import React from 'react';

export interface SearchResultsProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  data: T[];
  onItemClick: (item: T) => void;
}
