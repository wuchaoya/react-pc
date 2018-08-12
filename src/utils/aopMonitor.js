import initAopMonitor from './initAopMonitor';
const send = params => console.log(JSON.stringify(params));
const aopMonitor = initAopMonitor(send);
export default aopMonitor;