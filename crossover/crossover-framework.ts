import { v4 as uuidv4 } from 'uuid';

export function crossoverModel(typeDef: any) {
    typeDef.internal_type_id = uuidv4();
}

export function crossoverChannel(typeDef: any) {
    typeDef.channelID = uuidv4();
    typeDef.with = mt => withType(typeDef, mt);
}

function withType(typeDef: any, modelTypeDef: any) {
    var crossOverChannel = new typeDef();
    crossOverChannel.channelID = typeDef.channelID;
    crossOverChannel.eventID = `${crossOverChannel.channelID}-${modelTypeDef.internal_type_id}`;
    return crossOverChannel;
}

export abstract class CrossoverChannel {
    public static with: <TModel extends CrossoverModel>(modelType: TModel) => CrossoverChannel;
    public static channelID: string;
    public channelID: string;
    public eventID: string;
}

export abstract class CrossoverModel {
    public static internal_type_id: string;
}
