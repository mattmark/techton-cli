import { AbstractRunner } from '../../Runners/Abstract';
export declare abstract class AbstractPackageManager {
    protected runner: AbstractRunner;
    constructor(runner: AbstractRunner);
    install(): Promise<void>;
    /**
     * version
     */
    /**
     * add development dependencies
     */
    /**
     * add production dependencies
     */
    /**
     * get development dependencies
     */
    /**
     * get production dependencies
     */
    /**
     * read package json
     */
    /**
     * update development dependencies
     */
    /**
     * update production dependencies
     */
    /**
     * upgrade development dependencies
     */
    /**
     * upgrade production dependencies
     */
    /**
     * delete development dependencies
     */
    /**
     * delete production dependencies
     */
    abstract readonly name: string;
    abstract readonly cli: any;
}
