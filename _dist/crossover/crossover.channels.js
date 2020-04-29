"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CrossoverChannel = /** @class */ (function () {
    function CrossoverChannel() {
    }
    return CrossoverChannel;
}());
exports.CrossoverChannel = CrossoverChannel;
var WindowEvents = /** @class */ (function (_super) {
    __extends(WindowEvents, _super);
    function WindowEvents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WindowEvents;
}(CrossoverChannel));
exports.WindowEvents = WindowEvents;
var InitializationEvents = /** @class */ (function (_super) {
    __extends(InitializationEvents, _super);
    function InitializationEvents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InitializationEvents;
}(CrossoverChannel));
exports.InitializationEvents = InitializationEvents;
//# sourceMappingURL=crossover.channels.js.map