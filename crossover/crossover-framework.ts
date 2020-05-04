export function crossoverChannel(target: any) {
    target.channelName = target.name;
    target.withType = mt => withType(target, mt);
}
export function crossoverModel(target: any) {
    target.internal_type_name = target.name;
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
