import { CommanderStatic } from "commander"
import { InfoAction } from "../actions"
import { InfoCommand } from "./Info"

export class CommandLoader {
  public static load(program: CommanderStatic): void {
    new InfoCommand(new InfoAction()).load(program)
  }
}
