import { AppConfigData } from './app-config-data';
import { appConfigInit } from './app-config-init';
import { Core } from '../core';

export { AppConfigData }
export class AppConfig extends Core<AppConfigData> {
    public constructor(path?: string) {
        if (!path) {
            path = './appconfig.json';
        }

        super(path, appConfigInit);
    }
}
