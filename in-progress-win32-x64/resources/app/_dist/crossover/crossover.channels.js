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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var crossover_framework_1 = require("./crossover-framework");
var ConfigurationChannel = /** @class */ (function (_super) {
    __extends(ConfigurationChannel, _super);
    function ConfigurationChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfigurationChannel = __decorate([
        crossover_framework_1.crossoverChannel
    ], ConfigurationChannel);
    return ConfigurationChannel;
}(crossover_framework_1.CrossoverChannel));
exports.ConfigurationChannel = ConfigurationChannel;
var InitializationChannel = /** @class */ (function (_super) {
    __extends(InitializationChannel, _super);
    function InitializationChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InitializationChannel = __decorate([
        crossover_framework_1.crossoverChannel
    ], InitializationChannel);
    return InitializationChannel;
}(crossover_framework_1.CrossoverChannel));
exports.InitializationChannel = InitializationChannel;
var DataChannel = /** @class */ (function (_super) {
    __extends(DataChannel, _super);
    function DataChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataChannel = __decorate([
        crossover_framework_1.crossoverChannel
    ], DataChannel);
    return DataChannel;
}(crossover_framework_1.CrossoverChannel));
exports.DataChannel = DataChannel;
//# sourceMappingURL=crossover.channels.js.map