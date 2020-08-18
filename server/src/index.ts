import { routesCmd } from './routing-cmd';
import { Router } from './tool/arg';
import { Log } from './tool/log';

Log.title('Webservice Template', '0.0.1');
Router.read(routesCmd)
    .catch(err => {
        Log.er(err.message)
    })
    .then(() => {
        Log.ok('Execution finished')
    });