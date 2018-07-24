import { AbstractCommand } from '../Command/command.abstract';
import { CommanderStatic } from 'commander';
export declare class InfoCommand extends AbstractCommand {
    load(program: CommanderStatic): void;
}
