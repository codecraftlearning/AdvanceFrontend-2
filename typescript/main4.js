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
var Sports = /** @class */ (function () {
    function Sports(players, name) {
        if (name === void 0) { name = 'Sports'; }
        this._players = 0;
        this._name = name;
        this.players = players;
    }
    Object.defineProperty(Sports.prototype, "players", {
        get: function () {
            return this._players;
        },
        set: function (players) {
            this._players = players;
        },
        enumerable: false,
        configurable: true
    });
    Sports.prototype.printDetails = function () {
        console.log(this._name, "Max players count: ".concat(this.players));
    };
    return Sports;
}());
var Cricket = /** @class */ (function (_super) {
    __extends(Cricket, _super);
    function Cricket(players, overs) {
        var _this = _super.call(this, players) || this;
        _this._overs = 0;
        _this.overs = overs;
        return _this;
    }
    Object.defineProperty(Cricket.prototype, "overs", {
        get: function () {
            return this._overs;
        },
        set: function (overs) {
            this._overs = overs;
        },
        enumerable: false,
        configurable: true
    });
    //overriding
    Cricket.prototype.printDetails = function () {
        console.log("Cricket", "Max players count: ".concat(this.players, " and Max over is ").concat(this.overs));
    };
    return Cricket;
}(Sports));
var Football = /** @class */ (function (_super) {
    __extends(Football, _super);
    function Football(players, time) {
        var _this = _super.call(this, players) || this;
        _this._time = 0;
        _this.time = time;
        return _this;
    }
    Object.defineProperty(Football.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (time) {
            this._time = time;
        },
        enumerable: false,
        configurable: true
    });
    //overriding
    Football.prototype.printDetails = function () {
        console.log("Football", "Max players count: ".concat(this.players, " and Time limit is ").concat(this.time));
    };
    return Football;
}(Sports));
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var cricket = new Cricket(11, 50);
        var football = new Football(11, 90);
        var sports;
        sports = cricket;
        sports === null || sports === void 0 ? void 0 : sports.printDetails();
        sports = football;
        sports === null || sports === void 0 ? void 0 : sports.printDetails();
    };
    return Main;
}());
Main.main();
//OOps -> 
// Polymorphrisim => (compile time) ( run time)
