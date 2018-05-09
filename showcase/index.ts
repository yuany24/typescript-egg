import * as egg from 'egg';
let test = () => {
    egg.startCluster({
        customEgg: '',
        baseDir: process.cwd(),
        port: 3000,
        workers: 1,
        plugins: null,
        https: false,
        key: '1525415192797_1826',
        cert: '',
    },() => {
        console.log('started');
    });
}
export{test};