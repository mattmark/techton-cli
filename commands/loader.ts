import { CommanderStatic } from 'commander';
import { InfoAction } from '../actions';
import { InfoCommand } from './info';

export class CommandLoader {
  public static load(program: CommanderStatic): void {
    // create instance of each command and pass ref to it
    new InfoCommand(new InfoAction()).load(program);
  }
}