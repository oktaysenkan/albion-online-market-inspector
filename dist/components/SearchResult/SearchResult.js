import { Card } from '@geist-ui/react';
import React from 'react';
import { getItemImageURL } from 'src/services/items/items';
import './SearchResult.scss';
var SearchResult = function (_a) {
    var _b;
    var item = _a.item, style = _a.style, onClick = _a.onClick;
    return (React.createElement("div", { style: style, onClick: function () { return onClick && onClick(item); } },
        React.createElement(Card, { className: "card", hoverable: true },
            React.createElement("div", { className: "search-result" },
                React.createElement("div", { className: "item-image" },
                    React.createElement("img", { alt: "item", src: getItemImageURL(item) })),
                React.createElement("div", { className: "item-name" },
                    React.createElement("h5", null, (_b = item.LocalizedNames) === null || _b === void 0 ? void 0 : _b['EN-US']))))));
};
export default SearchResult;
//# sourceMappingURL=SearchResult.js.map