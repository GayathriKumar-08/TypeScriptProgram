var AreaCalc = /** @class */ (function () {
    function AreaCalc() {
    }
    AreaCalc.prototype.square1 = function (x) {
        var res = x * x;
        console.log("AREA OF SQAURE" + res.toFixed(2));
    };
    AreaCalc.prototype.rectangle1 = function (a, b, c) {
        var res = 2 * (a * b + b * c + a * c);
        console.log("AREA OF RECTANGLE" + res.toFixed(2));
    };
    AreaCalc.prototype.triangle1 = function (b, h, s1, s2, s3, H) {
        var res = b * h + (s1 + s2 + s3) * H;
        console.log("SURFACE AREA OF TRIANGLE" + res.toFixed(2));
    };
    return AreaCalc;
}());
var ac = new AreaCalc();
var square = ac.square1(9.9);
console.log(square);
var rectangle = ac.rectangle1(10.8, 10.4, 7.5);
console.log(rectangle);
var triangle = ac.triangle1(45, 45.6, 30, 30, 30, 54);
console.log(triangle);
