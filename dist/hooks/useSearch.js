import * as React from 'react';
import Fuse from 'fuse.js';
import { getEnchantment, getTier } from 'src/utils/items';
var useSearch = function (_a) {
    var _b = _a.list, list = _b === void 0 ? [] : _b, itemName = _a.itemName, selectedEnchantment = _a.selectedEnchantment, selectedTier = _a.selectedTier;
    var fuse = React.useMemo(function () {
        var fuseOptions = {
            includeScore: true,
            keys: ['LocalizedNames.EN-US']
        };
        return new Fuse(list, fuseOptions);
    }, [list]);
    var searchResults = React.useMemo(function () {
        return itemName.length > 0 ? fuse.search(itemName).map(function (item) { return item.item; }) : list;
    }, [itemName, fuse, list]);
    var haveNameItems = React.useMemo(function () {
        return searchResults.filter(function (item) { var _a; return (_a = item.LocalizedNames) === null || _a === void 0 ? void 0 : _a['EN-US']; });
    }, [searchResults]);
    var enchantmentSearchResults = React.useMemo(function () {
        return haveNameItems.filter(function (item) {
            var itemEnchantment = getEnchantment(item);
            return selectedEnchantment ? Number(selectedEnchantment) === itemEnchantment : true;
        });
    }, [haveNameItems, selectedEnchantment]);
    var tierSearchResults = React.useMemo(function () {
        return enchantmentSearchResults.filter(function (item) {
            var itemTier = getTier(item);
            return selectedTier ? Number(selectedTier) === itemTier : true;
        });
    }, [enchantmentSearchResults, selectedTier]);
    return tierSearchResults;
};
export default useSearch;
//# sourceMappingURL=useSearch.js.map