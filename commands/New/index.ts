import { Command, CommanderStatic } from "commander"
import { Input, AbstractCommand } from "../Command"

export class NewCommand extends AbstractCommand {
  public load(program: CommanderStatic) {
    program
      .command("new [name] [description] [version] [author]")
      .alias("n")
      .description("Generate a new Techton application.")
      .option("-d, --dry-run", "Allow to test changes before execute command.")
      .option("-s, --skip-install", "Allow to skip package installation.")
      .option(
        "-p, --package-manager [package-manager]",
        "Allow to specify package manager to skip package-manager selection."
      )
      .option("-l, --language [language]", "Specify ts or js language to use")
      .action(
        async (
          name: string,
          description: string,
          version: string,
          author: string,
          command: Command
        ) => {
          const options: Input[] = []
          options.push({ name: "dry-run", value: !!command.dryRun })
          options.push({ name: "skip-install", value: !!command.skipInstall })
          options.push({ name: "package-manager", value: command.packageManager })
          options.push({ name: "language", value: command.language ? command.language : "ts" })
          const inputs: Input[] = []
          inputs.push({ name: "name", value: name })
          inputs.push({ name: "description", value: description })
          inputs.push({ name: "version", value: version })
          inputs.push({ name: "author", value: author })
          await this.action.handle(inputs, options)
        }
      )
  }
}
