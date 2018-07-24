export interface PackageManagerCommands {
    install: string;
    add: string;
    update: string;
    remove: string;
    saveFlag: string;
    saveDevFlag: string;
}
export declare enum PackageManager {
    NPM = "npm",
    YARN = "yarn"
}
export declare class PackageManagerFactory {
    static create(): void;
    static find(): Promise<void>;
}
