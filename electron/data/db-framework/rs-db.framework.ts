import Knex = require('Knex');
import * as path from 'path';
import { entityModelDescriptor } from './rs-db.model-composer';
var dbPath = path.join(__dirname, '../db.db3');
var sqlClient = Knex({ client: 'sqlite3', connection: { filename: dbPath }, useNullAsDefault: true });

export interface RsDbTable<T> extends Knex.QueryBuilder<any> {
    removeEntity(id: string): Promise<any>;
    addEntity(entity: any): Promise<any>;
    updateEntity(entity: any): Promise<any>;
    getData(): Promise<T[]>;
    entityModelDescriptor: { type: new () => T, modelComposer: { name: string; isJson: boolean }[] };
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
        var res = await this.where({ id: entity.id }).update(entity);
        return res;
    }
    catch (err) {
        console.error(err);
        throw (err);
    }
}

async function getData<T>(this: RsDbTable<T>): Promise<T[]> {
    try {
        var query = this.select('*');
        var data = await query as any[];
        if (this.entityModelDescriptor) {
            data.forEach(item => {
                this.entityModelDescriptor.modelComposer.forEach(p => {
                    if (p.isJson && item[p.name] != null && item[p.name] != undefined && item[p.name] != '') {
                        item[p.name] = JSON.parse(item[p.name]);
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