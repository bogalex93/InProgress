"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function crossoverChannel(target) {
    target.channelName = target.name;
    target.withType = function (mt) { return withType(target, mt); };
}
exports.crossoverChannel = crossoverChannel;
function withType(typeDef, modelType) {
    var crossOverChannel = new typeDef();
    crossOverChannel.channelName = typeDef.name;
    var modelTypeName = new modelType().constructor.name;
    crossOverChannel.eventName = crossOverChannel.channelName + "-" + modelTypeName;
    return crossOverChannel;
}
//# sourceMappingURL=crossover.framework.js.map