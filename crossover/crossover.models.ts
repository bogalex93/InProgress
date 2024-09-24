import { KeyValue } from '@angular/common';
import { Display, Rectangle } from 'electron';
import { CrossoverModel, crossoverModel } from './crossover-framework';

@crossoverModel('AppConfig')
export class AppConfig extends CrossoverModel {
  minimized?: boolean;
  width?: number;
  minimizedAperence?: string;
  minimizedBounds?: any;
  bluredBackground?: boolean;
}
@crossoverModel('GenericData')
export class GenericData extends CrossoverModel {
  dataStore?: string;
  entity?: any;
  action?: 'add' | 'update' | 'delete'
}

@crossoverModel('ReadData')
export class ReadData extends CrossoverModel {
  dataStore?: string;
  filter?: any;
}

@crossoverModel('GraphicProperties')
export class GraphicProperties {
  display?: { id, size: Electron.Size, workArea: Electron.Rectangle, bounds: Electron.Rectangle };
  defaultSizes?: { [key: string]: number };
  appBounds?: Rectangle;
}
