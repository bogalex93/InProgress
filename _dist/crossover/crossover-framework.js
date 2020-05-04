"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function crossoverChannel(typeDef) {
    typeDef.channelName = typeDef.name;
    typeDef.withType = function (mt) { return withType(typeDef, mt); };
}
exports.crossoverChannel = crossoverChannel;
function crossoverModel(typeDef) {
    typeDef.internal_type_name = typeDef.name;
}
exports.crossoverModel = crossoverModel;
function withType(typeDef, modelTypeDef) {
    var crossOverChannel = new typeDef();
    crossOverChannel.channelName = typeDef.name;
    crossOverChannel.eventName = crossOverChannel.channelName + "-" + modelTypeDef.internal_type_name;
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