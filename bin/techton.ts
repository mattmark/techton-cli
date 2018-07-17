#!/usr/bin/env node
import { CommanderStatic } from 'commander';
import { CommandLoader } from '../commands';
import * as commander from 'commander';

const bootstrap = () => {
  const program: CommanderStatic = commander;
  program.version(require('../package.json').version);
  CommandLoader.load(program);
  commander.parse(process.argv);
};

bootstrap();