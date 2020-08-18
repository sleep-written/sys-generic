import { Interface } from '../tool/server';
import { appConfig } from '.';
import { Log } from '../tool/log';

export const listen: Interface.Action = app => {
    return new Promise((resolve, reject) => {
        const server = appConfig.data.server;
        app.listen(server.port, () => {
            Log.ok('Webservice is deployed, listening...');
        });
    });
};
