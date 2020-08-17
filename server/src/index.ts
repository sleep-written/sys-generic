import { routesCmd } from './routing-cmd';
import { Router } from './tool/arg';
import { Log } from './tool/log';

Router.read(routesCmd)
    .catch(err => {
        Log.er(err.message)
    })
    .then(() => {
        Log.ok('Execution finished')
    });