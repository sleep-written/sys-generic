import { Interface, RespHelper } from '../tool/server';
import { appConfig } from '.';

export const bindHelper: Interface.Action = app => {
  app.use((req, res, nxt) => {
    res.helper = new RespHelper(appConfig.data, res);
    nxt();
  });
};
