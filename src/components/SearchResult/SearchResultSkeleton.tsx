import { Card } from '@geist-ui/react';
import React from 'react';
import ContentLoader from 'react-content-loader';

import './SearchResult.scss';

const SearchResultSkeleton: React.FC = (props) => (
  <div>
    <Card>
      <div className="search-result">
        <ContentLoader
          speed={2}
          width={476}
          height={74}
          viewBox="0 0 476 74"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect x="0" y="0" rx="4" ry="4" width="74" height="74" />
          <rect x="81" y="30" rx="8" ry="8" width="216" height="14" />
        </ContentLoader>
      </div>
    </Card>
  </div>
);

export default SearchResultSkeleton;
