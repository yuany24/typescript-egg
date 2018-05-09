import {Service} from 'egg';
import * as DB from '../dbs/db_base';
import * as mongoose from "mongoose";
const addressDB = DB('Address');
class UserService extends Service {
    async find() {
        // mongoose.Promise = global.Promise;//不加这句话，会报错Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
        mongoose.connect(this.app.config.listen.mongodb, {useMongoClient: true});
        let result = await addressDB.getOne({find: {}});
        return result;
    }
}
module.exports = UserService;