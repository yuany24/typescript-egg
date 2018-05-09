import { DefaultConfig } from './config.default';

export default () => {
  const config: DefaultConfig = {
      listen:{
          mongodb: 'mongodb://rscdba:a11111@localhost:27033/rsc_main',
          hostname: '60.205.146.196',
          port: 18010,
          port_https: 17010,
          is_sms: true ,
    },
  };
  return config;
};