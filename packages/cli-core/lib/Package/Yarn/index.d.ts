import { AbstractPackageManager } from '../Abstract';
import { PackageManagerCommands } from '../Manager';
export declare class YarnPackageManager extends AbstractPackageManager {
    constructor();
    readonly name: string;
    readonly cli: PackageManagerCommands;
}
