import { Interface } from '../tool/server';
import { appConfig, ormConfig } from '.';

export const loadConfig: Interface.Action = async app => {
    await appConfig.load();
    await ormConfig.load();
}
