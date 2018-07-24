import { AbstractRunner } from '../../Runners/Abstract';

export abstract class AbstractPackageManager {
  constructor(protected runner: AbstractRunner) {}

  public async install() {
    // configure/initialize ora (spinner and message)
    // collect args and run silent against instance of runner
    // if success complete spinner and log to console
    // if success fail spinner and log to console
    // TODO[mattmark] add appropriate messages to cli-ui
  }

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


  public abstract get name(): string;

  public abstract get cli(): any;
}
