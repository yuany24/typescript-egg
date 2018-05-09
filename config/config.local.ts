import {DefaultConfig} from './config.default';

export default () => {
    const config: DefaultConfig = {
        listen:{
            mongodb: 'mongodb://192.168.3.248:27017/rsc_main',
            hostname: '192.168.3.248',
            port: 18080,
            port_https: 17080,
            is_sms: true,
        },
    };
    return config;

};