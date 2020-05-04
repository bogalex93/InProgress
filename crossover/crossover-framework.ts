export function crossoverChannel(typeDef: any) {
    typeDef.channelName = typeDef.name;
    typeDef.withType = mt => withType(typeDef, mt);
}
export function crossoverModel(typeDef: any) {
    typeDef.internal_type_name = typeDef.name;
}

function withType(typeDef: any, modelType: CrossoverModel) {
    var crossOverChannel = new typeDef();
    crossOverChannel.channelName = typeDef.name;    
    crossOverChannel.eventName = `${crossOverChannel.channelName}-${(modelType as any).internal_type_name}`;
    return crossOverChannel;
}

export abstract class CrossoverChannel {
    public static withType: (modelType: CrossoverModel) => CrossoverChannel;
    public static channelName: string;
    public channelName: string;
    public eventName: string;
}

export abstract class CrossoverModel {
    public static internal_type_name: string;
}
