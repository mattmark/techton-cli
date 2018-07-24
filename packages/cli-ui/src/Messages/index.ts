import emojis from '../Emojis';

export const messages = {
    PACKAGE_MANAGER_QUESTION: `Which package manager would you ${ emojis.HEART } to use?`,
    RUNNER_EXECUTION_ERROR: (command: string) => `${ emojis.SCREAM }  Failed to execute command: ${ command }`
};