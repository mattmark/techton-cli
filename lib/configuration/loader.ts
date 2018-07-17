import { Configuration } from './interface';

export interface ConfigurationLoader {
  load(): Configuration | Promise<Configuration>;
}