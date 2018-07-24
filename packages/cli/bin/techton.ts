#!/usr/bin/env node
import { infoLoader, newLoader } from '@techton/cli-commands';
import * as commander from 'commander';

const bootstrap = () => {
    const program: commander.CommanderStatic = commander;
    program.version(require('../package.json').version);
    infoLoader(program);
    newLoader(program);
    
    commander.parse(process.argv);
};

bootstrap();