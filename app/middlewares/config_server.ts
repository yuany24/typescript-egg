const data = {
    env: 'dev',
    dev: {
        env: 'dev',
        mongodb: 'mongodb://192.168.3.248:27017/rsc_main',                //链接数据库地址
        local_server_ip: '192.168.3.248',                               //本服务器实际ip
        port: 18092,                                                    //本服务http使用端口
        port_https: 17092                                               //本服务https使用端口
    },
    pro: {
        env: 'pro',
        mongodb: 'mongodb://rscdba:a11111@localhost:27028/rsc_im',      //链接数据库地址
        port: 18092,                                                    //本服务http使用端口
        port_https: 17092                                               //本服务https使用端口
    },
    demo: {
        env: 'demo',
        mongodb: 'mongodb://rscdba:a11111@localhost:27018/rsc_im',      //链接数据库地址
        local_server_ip: '101.200.0.53',                                //本服务器实际ip
        port: 18092,                                                    //本服务使用端口
        port_https: 17092                                               //本服务使用端口
    },
    test: {
        env: 'test',
        mongodb: 'mongodb://rscdba:a11111@localhost:27017/rsc_im',      //链接数据库地址
        local_server_ip: '101.200.0.53',                                //本服务器实际ip
        port: 19092,                                                    //本服务使用端口
        port_https: 20092                                               //本服务使用端口
    }
};

//[]里是定量就好了,报错就没了
let a= process.env.node_env || data.env;
export = data[a];