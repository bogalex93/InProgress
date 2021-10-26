import { CrossoverModel, crossoverModel } from './crossover-framework';

@crossoverModel
export class DisplayInfo extends CrossoverModel {
  width: number;
  height: number;
}
@crossoverModel
export class AppConfig extends CrossoverModel {
  minimized?: boolean;
  width?: number;
  minimizedAperence?: string;
  minimizedBounds?: any;
  bluredBackground?: boolean;
}
@crossoverModel
export class GenericData extends CrossoverModel {
  dataStore?: string;
  entity?: any;
  action?: 'add' |  'update' | 'delete'
}

@crossoverModel
export class ReadData extends CrossoverModel {
  dataStore?: string;
  filter?: any;
}
