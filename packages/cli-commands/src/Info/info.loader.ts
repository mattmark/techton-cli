import { CommanderStatic } from 'commander';

import { InfoCommand } from './info.command';
import { InfoAction } from './info.action';

export default function infoLoader(program: CommanderStatic): void {
    new InfoCommand(new InfoAction()).load(program);
}
