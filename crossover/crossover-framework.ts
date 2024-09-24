import { v4 as uuidv4 } from 'uuid';

export function crossoverModel(name: string) {
    return function (target: any) {
        target.internal_type_id = name;
    }
}

export function crossoverChannel(name: string) {
    return function (target: any) {
        target.channelID = name;
        target.with = mt => withType(target, mt);
    };
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
