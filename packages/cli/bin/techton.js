#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_commands_1 = require("@techton/cli-commands");
const commander = require("commander");
const bootstrap = () => {
    const program = commander;
    program.version(require('../package.json').version);
    cli_commands_1.infoLoader(program);
    cli_commands_1.newLoader(program);
    commander.parse(process.argv);
};
bootstrap();
