import { OrmConfigData } from './orm-config-data';
import { ormConfigInit } from './orm-config-init';
import { Core } from '../core';

export { OrmConfigData }
export class OrmConfig extends Core<OrmConfigData[]> {
    public constructor(path?: string) {
        if (!path) {
            path = './ormconfig.json';
        }

        super(path, ormConfigInit);
    }
}
