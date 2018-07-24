import { CommanderStatic } from 'commander';

import { NewCommand } from './new.command';
import { NewAction } from './new.action';

export default function newLoader(program: CommanderStatic): void {
    new NewCommand(new NewAction()).load(program);
}
