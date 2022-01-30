import React, { useMemo } from 'react';
import { Badge, Loading, Modal, Table } from '@geist-ui/react';
import { useItemPrices } from 'src/queries/items.queries';
import { getEnchantment, getTier } from 'src/utils/items';
import './ItemModal.scss';
var ItemModal = function (_a) {
    var _b;
    var open = _a.open, onClose = _a.onClose, selectedItem = _a.selectedItem;
    var _c = useItemPrices(selectedItem.UniqueName), data = _c.data, isLoading = _c.isLoading, isError = _c.isError;
    var itemName = (_b = selectedItem.LocalizedNames) === null || _b === void 0 ? void 0 : _b['EN-US'];
    var tier = "T".concat(getTier(selectedItem), ".").concat(getEnchantment(selectedItem));
    var blackMarketPrices = useMemo(function () {
        if (!data) {
            return [];
        }
        return data
            .filter(function (item) { return item.city === 'Black Market'; })
            .filter(function (item) { return item.maximumBuyPrice; });
    }, [data]);
    var cityPrices = useMemo(function () {
        if (!data) {
            return [];
        }
        return data
            .filter(function (item) { return item.city !== 'Black Market'; })
            .filter(function (item) { return item.minimumSellPrice; });
    }, [data]);
    if (!selectedItem)
        return React.createElement(React.Fragment, null);
    return (React.createElement(Modal, { width: "800px", visible: open, onClose: onClose },
        React.createElement(Modal.Title, { className: "title" },
            itemName,
            React.createElement(Badge, { className: "badge" }, tier)),
        data ? (React.createElement("div", { className: "prices" },
            cityPrices.length > 0 && (React.createElement(Table, { data: cityPrices },
                React.createElement(Table.Column, { prop: "city", label: "city" }),
                React.createElement(Table.Column, { prop: "quality", label: "quality" }),
                React.createElement(Table.Column, { prop: "minimumSellPrice", label: "Min Sell Price" }),
                React.createElement(Table.Column, { prop: "minimumSellPriceDate", label: "Last Updated" }))),
            blackMarketPrices.length > 0 && (React.createElement(Table, { data: blackMarketPrices },
                React.createElement(Table.Column, { prop: "city", label: "city" }),
                React.createElement(Table.Column, { prop: "quality", label: "quality" }),
                React.createElement(Table.Column, { prop: "maximumBuyPrice", label: "Max Buy Price" }),
                React.createElement(Table.Column, { prop: "maximumBuyPriceDate", label: "Last Updated" }))),
            blackMarketPrices.length < 1 && cityPrices.length < 1 && React.createElement("p", null, "No price available"))) : isLoading ? (React.createElement(Loading, null)) : (isError && React.createElement("div", null, "error")),
        React.createElement(Modal.Action, { onClick: onClose }, "Close")));
};
export default ItemModal;
//# sourceMappingURL=ItemModal.js.map