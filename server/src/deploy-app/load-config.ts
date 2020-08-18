import { Interface } from '../tool/server';
import { appConfig, ormConfig } from '.';
import Chalk from 'chalk';

export const loadConfig: Interface.Action = async app => {
    if (
        (!await appConfig.exists) ||
        (!await ormConfig.exists)
    ) {
        throw new Error(
                'Some of configuration files wan\'t found. Please execute the '
            +   `${Chalk.bold.white.bgGrey(' setup ')} command before serving the application.`
        );
    }

    await appConfig.load();
    await ormConfig.load();
}
