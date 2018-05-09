import { Application } from 'egg';
import * as mongoose from "mongoose";
export default (app: Application) => {
    mongoose.Promise = global.Promise;//不加这句话，会报错Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
    mongoose.connect(app.config.listen.mongodb, {useMongoClient: true});
    mongoose.connection.on('connected',function() {
        let date_string = new Date().toString();
        console.log(new Date().toString() + ' ok! ' + __filename.split('/').pop());
    });
    mongoose.connection.on('error',function() {
        let date_string = new Date().toString();
        console.log('mongodb error: ' + date_string + '. Closing....');
        mongoose.connection.close();
    });

    mongoose.connection.on('disconnected',function() {
        let date_string = new Date().toString();
        console.log('mongodb disconnected: ' + date_string + '. Re connecting....');
        mongoose.connect(app.config.listen.mongodb, {useMongoClient: true});
    });

    mongoose.connection.on('close',function() {
        mongoose.connect(app.config.listen.mongodb, {useMongoClient: true});
    });
};
//
//
//
//
//
//
//
// let exportOut = (app:) => {
//     mongoose.Promise = global.Promise;//不加这句话，会报错Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
//     mongoose.connect(config_server.mongodb, {useMongoClient: true});
//     mongoose.connection.on('connected',function() {
//         let date_string = new Date().toString();
//         console.log(new Date().toString() + ' ok! ' + __filename.split('/').pop());
//     });
//     mongoose.connection.on('error',function() {
//         let date_string = new Date().toString();
//         console.log('mongodb error: ' + date_string + '. Closing....');
//         mongoose.connection.close();
//     });
//
//     mongoose.connection.on('disconnected',function() {
//         let date_string = new Date().toString();
//         console.log('mongodb disconnected: ' + date_string + '. Re connecting....');
//         mongoose.connect(config_server.mongodb);
//     });
//
//     mongoose.connection.on('close',function() {
//         mongoose.connect(config_server.mongodb);
//     });
//
// };
//
// export = exportOut;