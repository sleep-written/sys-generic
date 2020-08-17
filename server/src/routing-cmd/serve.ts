import { Route } from '../tool/arg';

export const serve = new Route();
serve.main = [
    [ 'serve', 'srv' ]
]
serve.desc = 'Deploy the webservice.';
serve.callback = async args => {
    
};
