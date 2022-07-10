"use strict";
exports.__esModule = true;
var Square = /** @class */ (function () {
    function Square(side) {
        var _this = this;
        this.getArea = function () { return Math.pow(_this.side, 2); };
        this.howtoColor = function () {
            return "Color all four side";
        };
        this.side = side;
    }
    return Square;
}());
var square = [];
square[0] = new Square(40);
square[1] = new Square(30);
square[2] = new Square(80);
square.forEach(function (item, index) {
    console.log(item.getArea());
    if (item instanceof Square) {
        console.log(item.howtoColor());
    }
});
