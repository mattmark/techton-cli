import { AbstractAction } from '../Action/action.abstract';
import { CommanderStatic } from 'commander';
export declare abstract class AbstractCommand {
    protected action: AbstractAction;
    constructor(action: AbstractAction);
    abstract load(program: CommanderStatic): void;
}
