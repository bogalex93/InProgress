export function crossoverModel(typeDef: any) {
    typeDef.internal_type_name = typeDef.name;
}

export function crossoverChannel(typeDef: any) {
    typeDef.channelName = typeDef.name;
    console.log(typeDef);
    typeDef.with = mt => withType(typeDef, mt);
}

function withType(typeDef: any, modelTypeDef: any) {
    var crossOverChannel = new typeDef();
    console.log(crossOverChannel);
    crossOverChannel.channelName = typeDef.name;
    crossOverChannel.eventName = `${crossOverChannel.channelName}-${modelTypeDef.internal_type_name}`;
    return crossOverChannel;
}

export abstract class CrossoverChannel {
    public static with: <TModel extends CrossoverModel>(modelType: TModel) => CrossoverChannel;
    public static channelName: string;
    public channelName: string;
    public eventName: string;
}

export abstract class CrossoverModel {
    public static internal_type_name: string;
}
