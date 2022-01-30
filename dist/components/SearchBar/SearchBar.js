import React from 'react';
import { Input, Select } from '@geist-ui/react';
import './SearchBar.scss';
var SearchBar = function (_a) {
    var itemName = _a.itemName, onItemNameChange = _a.onItemNameChange, onTierChange = _a.onTierChange, onEnchantmentChange = _a.onEnchantmentChange;
    return (React.createElement("div", { className: "search-bar" },
        React.createElement(Input, { className: "input", size: 1, clearable: true, placeholder: "Item name", value: itemName, onChange: onItemNameChange }),
        React.createElement(Select, { className: "input", placeholder: "Tier", onChange: onTierChange },
            React.createElement(Select.Option, { value: "all" }, "All"),
            React.createElement(Select.Option, { value: "1" }, "Tier 1"),
            React.createElement(Select.Option, { value: "2" }, "Tier 2"),
            React.createElement(Select.Option, { value: "3" }, "Tier 3"),
            React.createElement(Select.Option, { value: "4" }, "Tier 4"),
            React.createElement(Select.Option, { value: "5" }, "Tier 5"),
            React.createElement(Select.Option, { value: "6" }, "Tier 6"),
            React.createElement(Select.Option, { value: "7" }, "Tier 7"),
            React.createElement(Select.Option, { value: "8" }, "Tier 8")),
        React.createElement(Select, { className: "input", placeholder: "Enchantment", onChange: onEnchantmentChange },
            React.createElement(Select.Option, { value: "all" }, "All"),
            React.createElement(Select.Option, { value: "0" }, "0"),
            React.createElement(Select.Option, { value: "1" }, "1"),
            React.createElement(Select.Option, { value: "2" }, "2"),
            React.createElement(Select.Option, { value: "3" }, "3"))));
};
export default SearchBar;
//# sourceMappingURL=SearchBar.js.map