import React, { memo } from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import SearchResult from '../SearchResult/SearchResult';
import SearchResultSkeleton from '../SearchResult/SearchResultSkeleton';
import './SearchResults.scss';
var SearchResults = React.forwardRef(function (_a, ref) {
    var data = _a.data, onItemClick = _a.onItemClick, loading = _a.loading;
    return (React.createElement(React.Fragment, null, loading ? (React.createElement(React.Fragment, null, Array(10)
        .fill(1)
        .map(function (index) { return (React.createElement(SearchResultSkeleton, { key: index })); }))) : (React.createElement(AutoSizer, null, function (_a) {
        var height = _a.height, width = _a.width;
        return (React.createElement(React.Fragment, null,
            React.createElement(List, { ref: ref, className: "search-results", height: height, itemCount: data.length, itemSize: 116, width: width }, function (_a) {
                var index = _a.index, style = _a.style;
                return (React.createElement(SearchResult, { style: style, key: data[index].UniqueName, item: data[index], onClick: function () { return onItemClick(data[index]); } }));
            })));
    }))));
});
SearchResults.displayName = 'SearchResults';
export default memo(SearchResults);
//# sourceMappingURL=SearchResults.js.map