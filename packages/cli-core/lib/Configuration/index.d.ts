import { Reader } from '../Readers';
export interface Configuration {
    [key: string]: any;
}
export interface ConfigurationLoader {
    load(): Configuration | Promise<Configuration>;
}
export declare class TechtonConfigurationLoader implements ConfigurationLoader {
    private readonly reader;
    constructor(reader: Reader);
    load(): Promise<Configuration>;
}
