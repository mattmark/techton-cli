import { YarnRunner } from './Yarn';
import { NpmRunner } from './Npm';
export * from './Abstract';
export { YarnRunner, NpmRunner };
export declare enum Runner {
    YARN = 0,
    NPM = 1
}
export declare class RunnerFactory {
    static create(runner: Runner): void | YarnRunner | NpmRunner;
}
