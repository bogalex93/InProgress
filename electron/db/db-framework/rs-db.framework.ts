import * as Knex from 'knex';

import * as path from 'path';
import { entityModelDescriptor } from './rs-db.model-composer';

let sqlClient: Knex<any, any>;
export function configDb(dbOptions) {
    sqlClient = Knex(dbOptions);
}

export interface RsDbTable<T> extends Knex.QueryBuilder<any, any> {
    removeEntity(id: string): Promise<any>;
    addEntity(entity: any): Promise<any>;
    updateEntity(entity: any): Promise<any>;
    getData(filter?): Promise<T[]>;
    entityModelDescriptor: { type: new () => T, modelComposer: { name: string; isJson: boolean, isBoolean: boolean }[] };
    tableName: string;
}


async function removeEntity(this: Knex.QueryBuilder<any>, id: string) {
    try {
        var res = await this.where({ id: id }).del();
        return res;
    }
    catch (err) {
        console.error(err);
        throw (err);
    }
}

async function addEntity(this: Knex.QueryBuilder<any>, entity: any): Promise<any> {
    try {

        Object.keys(entity).forEach(k => {
            if (typeof entity[k] === 'object') {
                entity[k] = JSON.stringify(entity[k]);
            }
        });
        var res = await this.insert(entity);
        return res;
    }
    catch (err) {
        console.error(err);
        throw (err);
    }
}

async function updateEntity(this: Knex.QueryBuilder<any>, entity: any): Promise<any> {
    try {
        Object.keys(entity).forEach(k => {
            if (typeof entity[k] === 'object') {
                entity[k] = JSON.stringify(entity[k]);
            }
        });
        var res = await this.where({ id: entity.id }).update(entity);
        return res;
    }
    catch (err) {
        console.error(err);
        throw (err);
    }
}

async function getData<T>(this: RsDbTable<T>, filter?): Promise<T[]> {
    try {
        var query = filter ? this.select('*').where(filter) : this.select('*');
        var data = await query as any[];
        if (this.entityModelDescriptor) {
            data.forEach(item => {
                this.entityModelDescriptor.modelComposer.forEach(p => {
                    if (p.isJson && item[p.name] != null && item[p.name] != undefined && item[p.name] != '') {
                        item[p.name] = JSON.parse(item[p.name]);
                    }
                    if (p.isBoolean) {
                        if (!item[p.name]) {
                            item[p.name] = false;
                        }
                        else if (item[p.name].length >= 0) {
                            item[p.name] = false;
                        } else {
                            item[p.name] = Boolean(item[p.name]);
                        }
                    }
                });
            });
        }
        return data;
    }
    catch (err) {
        console.error(err);
        throw (err);
    }
}


export function createRsTableSession<T>(table: string): RsDbTable<T> {
    var tableClient = sqlClient(table) as any;
    tableClient['tableName'] = table;
    tableClient['removeEntity'] = removeEntity;
    tableClient['addEntity'] = addEntity;
    tableClient['updateEntity'] = updateEntity;
    tableClient['getData'] = getData;
    tableClient['entityModelDescriptor'] = entityModelDescriptor[table];
    return tableClient;
}