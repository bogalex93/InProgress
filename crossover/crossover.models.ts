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
}
@crossoverModel
export class GenericData extends CrossoverModel {
  storeName: string;
  data?: any;
  action: 'save' | 'get'
}
