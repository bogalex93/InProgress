"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function crossoverChannel(target) {
    target.channelName = target.name;
    target.withType = function (mt) { return withType(target, mt); };
}
exports.crossoverChannel = crossoverChannel;
function crossoverModel(target) {
    target.internal_type_name = target.name;
}
exports.crossoverModel = crossoverModel;
function withType(typeDef, modelType) {
    var crossOverChannel = new typeDef();
    crossOverChannel.channelName = typeDef.name;
    crossOverChannel.eventName = crossOverChannel.channelName + "-" + modelType.internal_type_name;
    return crossOverChannel;
}
var CrossoverChannel = /** @class */ (function () {
    function CrossoverChannel() {
    }
    return CrossoverChannel;
}());
exports.CrossoverChannel = CrossoverChannel;
var CrossoverModel = /** @class */ (function () {
    function CrossoverModel() {
    }
    return CrossoverModel;
}());
exports.CrossoverModel = CrossoverModel;
//# sourceMappingURL=crossover-framework.js.map