var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Card } from '@geist-ui/react';
import React from 'react';
import ContentLoader from 'react-content-loader';
import './SearchResult.scss';
var SearchResultSkeleton = function (props) { return (React.createElement("div", null,
    React.createElement(Card, null,
        React.createElement("div", { className: "search-result" },
            React.createElement(ContentLoader, __assign({ speed: 2, width: 476, height: 74, viewBox: "0 0 476 74", backgroundColor: "#f3f3f3", foregroundColor: "#ecebeb" }, props),
                React.createElement("rect", { x: "0", y: "0", rx: "4", ry: "4", width: "74", height: "74" }),
                React.createElement("rect", { x: "81", y: "30", rx: "8", ry: "8", width: "216", height: "14" })))))); };
export default SearchResultSkeleton;
//# sourceMappingURL=SearchResultSkeleton.js.map