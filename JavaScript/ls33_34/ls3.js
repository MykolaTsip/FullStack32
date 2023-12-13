var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// // Інкапсуляція
// // public, private, protected
var MaclBook = /** @class */ (function () {
    function MaclBook(model, setPass) {
        this.model = '';
        this.RAM = 0;
        this.size = '';
        this.password = '';
        this.access = false;
        this.data = ' Mb';
        this.model = model;
        this.password = setPass;
        if (this.model === 'Pro max') {
            this.RAM = 32;
            this.size = '17in';
        }
    }
    MaclBook.prototype.checkPass = function (pass) {
        this.access = this.password === pass;
    };
    MaclBook.prototype.setData = function (data) {
        this.data = data;
    };
    MaclBook.prototype.getData = function () {
        return this.data;
    };
    return MaclBook;
}());
var pro = new MaclBook('Pro max', 1234);
console.log(pro);
// pro.password = 'fdssdsf';
// pro.password = 'dfdsdffsdd'
// console.log(pro.getData());
console.log(pro);
console.log(pro.RAM);
var Watch = /** @class */ (function (_super) {
    __extends(Watch, _super);
    function Watch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Watch.prototype.logData = function () {
        console.log(_super.prototype.getData.call(this));
        console.log(this.RAM);
    };
    return Watch;
}(MaclBook));
