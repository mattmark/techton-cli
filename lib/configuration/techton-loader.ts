import { Reader } from '../readers';
import { Configuration } from './interface';
import { ConfigurationLoader } from './loader';

export class TechtonConfigurationLoader implements ConfigurationLoader {
  
  constructor(private readonly reader: Reader) {}
  
  public async load(): Promise<Configuration> {
    const content: string = await this.reader.read('.ttcli.json');
    return JSON.parse(content);
  }
}