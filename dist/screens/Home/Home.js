import { Display, Note, useModal } from '@geist-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedItem as selectedItemState } from 'src/store/item/atoms';
import ItemModal from 'src/components/ItemModal/ItemModal';
import SearchBar from 'src/components/SearchBar/SearchBar';
import SearchResults from 'src/components/SearchResults/SearchResults';
import useSearch from 'src/hooks/useSearch';
import { useAllItems } from 'src/queries/items.queries';
import './Home.scss';
var Home = function () {
    var windowRef = useRef(null);
    var _a = useRecoilState(selectedItemState), selectedItem = _a[0], setSelectedItem = _a[1];
    var _b = useState(''), itemName = _b[0], setItemName = _b[1];
    var _c = useState(''), selectedEnchantment = _c[0], setSelectedEnchantment = _c[1];
    var _d = useState(''), selectedTier = _d[0], setSelectedTier = _d[1];
    var _e = useModal(), setVisible = _e.setVisible, visible = _e.visible;
    var _f = useAllItems(), data = _f.data, isLoading = _f.isLoading, isError = _f.isError;
    var searchResults = useSearch({
        list: data,
        itemName: itemName,
        selectedEnchantment: selectedEnchantment,
        selectedTier: selectedTier
    });
    useEffect(function () {
        var _a;
        (_a = windowRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo(0);
    }, [searchResults]);
    var handleItemNameChange = function (event) {
        setItemName(event.currentTarget.value);
    };
    var handleTierChange = function (value) {
        var tier = value === 'all' ? '' : value;
        setSelectedTier(tier);
    };
    var handleEnchantmentChange = function (value) {
        var enchantment = value === 'all' ? '' : value;
        setSelectedEnchantment(enchantment);
    };
    var handleItemClick = function (item) {
        setSelectedItem(item);
        setVisible(true);
    };
    var handleModalClose = function () {
        setVisible(false);
    };
    return (React.createElement("div", { className: "home" },
        React.createElement(SearchBar, { onTierChange: handleTierChange, onEnchantmentChange: handleEnchantmentChange, onItemNameChange: handleItemNameChange, itemName: itemName }),
        selectedItem && (React.createElement(ItemModal, { onClose: handleModalClose, open: visible, selectedItem: selectedItem })),
        data || isLoading ? (React.createElement(SearchResults, { ref: windowRef, loading: isLoading, data: searchResults, onItemClick: handleItemClick })) : (isError && (React.createElement(Display, { shadow: true },
            React.createElement(Note, { type: "error", label: false, filled: true }, "An error accured"))))));
};
export default Home;
//# sourceMappingURL=Home.js.map