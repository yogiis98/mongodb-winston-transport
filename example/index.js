const winston = require('winston');
const { MongoDB } = require('../dist/main.min');

const myFormatter = winston.format((info, opts) => {
  console.log(info, opts);
  return info;
});
const Logger = winston.createLogger({
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    myFormatter(),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS'
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports: [new MongoDB({ db: 'mongodb://localhost:27017/mongodbwinston', leaveConnectionOpen: false })],
  exitOnError: false
});

Logger.info('hello', new Error("hell"));
Logger.info('hello', {my:true, you:false});