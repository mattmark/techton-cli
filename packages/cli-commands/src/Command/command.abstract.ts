import { AbstractAction } from '../Action/action.abstract';
import { CommanderStatic } from 'commander';

export abstract class AbstractCommand {
  constructor(protected action: AbstractAction) {}

  public abstract load(program: CommanderStatic): void;
}