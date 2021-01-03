"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
exports.GenericData = exports.AppConfig = exports.DisplayInfo = void 0;
var crossover_framework_1 = require("./crossover-framework");
var DisplayInfo = /** @class */ (function (_super) {
    __extends(DisplayInfo, _super);
    function DisplayInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DisplayInfo = __decorate([
        crossover_framework_1.crossoverModel
    ], DisplayInfo);
    return DisplayInfo;
}(crossover_framework_1.CrossoverModel));
exports.DisplayInfo = DisplayInfo;
var AppConfig = /** @class */ (function (_super) {
    __extends(AppConfig, _super);
    function AppConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppConfig = __decorate([
        crossover_framework_1.crossoverModel
    ], AppConfig);
    return AppConfig;
}(crossover_framework_1.CrossoverModel));
exports.AppConfig = AppConfig;
var GenericData = /** @class */ (function (_super) {
    __extends(GenericData, _super);
    function GenericData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenericData = __decorate([
        crossover_framework_1.crossoverModel
    ], GenericData);
    return GenericData;
}(crossover_framework_1.CrossoverModel));
exports.GenericData = GenericData;
//# sourceMappingURL=crossover.models.js.map