import { AppConfig, OrmConfig } from '../tool/config';
export const appConfig = new AppConfig();
export const ormConfig = new OrmConfig();

import { Interface } from '../tool/server';
import { bindHelper } from './bind-helper';
import { loadConfig } from './load-config';
import { mountEndpoints } from './mount-endpoints';
export const deployment: Interface.Action[] = [
    loadConfig,
    bindHelper,
    mountEndpoints
];
