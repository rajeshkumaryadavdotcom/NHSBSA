import { Application } from 'express';
import router from './routes/router';

const routes = (app: Application): void => {
  app.use('/api', router);
};

export default routes;
