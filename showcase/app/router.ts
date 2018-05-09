import { Application } from 'egg';

export default (app: Application) => {
    app.router.get('/user', app.controller.user.info);
};