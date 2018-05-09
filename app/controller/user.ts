import {Controller} from 'egg';

class UserController extends Controller {
    async info() {
        const {ctx} = this;
        const userInfo = await ctx.service.user.find();
        ctx.body = userInfo;
    }
}

module.exports = UserController;
