import { appConfig, ormConfig } from '../deploy-app';
import { Route } from '../tool/arg';
import { Log } from '../tool/log';

export const setup = new Route();
setup.main = [
    [ 'setup', 'stp' ]
];
setup.desc = 'Creates the files needed to configure the behavior of the webservice.';
setup.callback = async args => {
    if (!await appConfig.exists) {
        Log.ev('Creating "appconfig.json"...');
        await appConfig.save();
    }

    if (!await ormConfig.exists) {
        Log.ev('Creating "ormconfig.json"...');
        await ormConfig.save();
    }

    Log.ok(
            'Done, now before the deploy the applicacion, you must configure the files '
        +   '"*config.json" created in this folder.'
    );
};
