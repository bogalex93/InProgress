import { crossoverChannel, CrossoverChannel } from './crossover-framework';

@crossoverChannel('ConfigurationChannel')
export class ConfigurationChannel extends CrossoverChannel {
}

@crossoverChannel('InitializationChannel')
export class InitializationChannel extends CrossoverChannel {
}

@crossoverChannel('DataChannel')
export class DataChannel extends CrossoverChannel {
}



