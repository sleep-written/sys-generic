import { Route } from '../tool/arg';
import { help } from './help';
import { serve } from './server';
import { setup } from './setup';

export const routesCmd: Route[] = [
    help,
    serve,
    setup
];
