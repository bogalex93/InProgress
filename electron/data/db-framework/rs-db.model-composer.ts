
const modelComposer = {};
export const entityModelDescriptor = {};

export function linkTable(table: string) {
    return function (target: any) {
        var modelDescriptor = {} as any;
        var type = target.prototype.constructor;
        modelDescriptor = { type: type, modelComposer: modelComposer[type.name] }
        entityModelDescriptor[table] = modelDescriptor;
    };
}

export function jsonProp() {
    return function (target: any, propertyKey: string) {
        var composer = modelComposer[target.constructor.name] || [];
        var propertyMeta = composer.find((p: { name: string; }) => p.name == propertyKey) || {};
        propertyMeta = {
            name: propertyKey,
            isJson: true
        };
        composer.push(propertyMeta);
        modelComposer[target.constructor.name] = composer;
    }
}


export interface DbEntity {
    id: string;
}



