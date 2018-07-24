export interface Reader {
    list(): string[] | Promise<string[]>;
    read(name: string): string | Promise<string>;
}
export declare class FileSystemReader implements Reader {
    private readonly directory;
    constructor(directory: string);
    list(): Promise<string[]>;
    read(name: string): Promise<string>;
}
