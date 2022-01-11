import { Tables } from '../db/db.models';
import { db } from '../db/db';
import { GenericData, ReadData } from '../../crossover/crossover.models';

export class DataHandler {

  async saveData(genericData: GenericData) {
    try {
      var res;
      if (genericData.action == 'add') {
        res = await db[genericData.dataStore as Tables].addEntity(genericData.entity);
      }
      if (genericData.action == 'update') {
        res = await db[genericData.dataStore as Tables].updateEntity(genericData.entity);
      }
      if (genericData.action == 'delete') {
        res = await db[genericData.dataStore as Tables].removeEntity(genericData.entity.id);
      }
    }
    catch (err) {
      var test = err;
    }
  }

  async getData(readModel: ReadData) {
    var data = await db[readModel.dataStore as Tables].getData(readModel.filter);
    return data;
  }

}
