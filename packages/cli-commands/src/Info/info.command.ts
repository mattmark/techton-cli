import { AbstractCommand } from '../Command/command.abstract';
import { CommanderStatic } from 'commander';

export class InfoCommand extends AbstractCommand {
  public load(program: CommanderStatic) {
    program
      .command('info')
      .alias('i')
      .description('Display Techton CLI details')
      .action(async () => {
        await this.action.handle();
      });
  }
}