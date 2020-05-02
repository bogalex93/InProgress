function crossoverChannel<T>(target: any) {
    target.channelName = target.name;    
    target.withType = mt => withType(target, mt);    
}

function withType(typeDef: any, modelType: new () => any) {
    var crossOverChannel = new typeDef();
    crossOverChannel.channelName = typeDef.name;    
    crossOverChannel.modelName = new modelType().constructor.name;
    crossOverChannel.eventName = `${crossOverChannel.channelName}-${crossOverChannel.modelName}`;
    return crossOverChannel;
}

export abstract class CrossoverChannel {
    public static withType: (modelType: new () => any) => CrossoverChannel;
    public static channelName: string;

    public channelName: string;
    public modelName: string;
    public eventName: string;
}

@crossoverChannel
export class InitializationChannel extends CrossoverChannel {
}


