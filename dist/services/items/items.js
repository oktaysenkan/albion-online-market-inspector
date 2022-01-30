import http from 'src/utils/http';
export var getAllItems = function () {
    return http.get('https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/formatted/items.json');
};
export var getItemImageURL = function (item) {
    return "https://render.albiononline.com/v1/item/".concat(item.UniqueName, ".png");
};
export var getItemPrice = function (uniqueName) {
    return http.get("stats/prices/".concat(uniqueName, "?qualities=1,2,3,4,5"));
};
//# sourceMappingURL=items.js.map