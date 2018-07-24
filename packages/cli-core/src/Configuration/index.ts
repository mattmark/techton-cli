import { Reader } from '../Readers';

export interface Configuration {
    [ key: string ]: any;
}

export interface ConfigurationLoader {
    load(): Configuration | Promise<Configuration>;
}


export class TechtonConfigurationLoader implements ConfigurationLoader {
  
  constructor(private readonly reader: Reader) {}
  
  public async load(): Promise<Configuration> {
    const content: string = await this.reader.read('.ttcli.json');
    return JSON.parse(content);
  }
}