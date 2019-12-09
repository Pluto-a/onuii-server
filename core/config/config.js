import path from 'path';

const config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.mongoHost = process.env.mongoHost || 'localhost';
config.mongoPort = process.env.mongoPort || '27017';
config.mongoName = process.env.mongoName || 'onuii';

config.mysqlHost = process.env.mysqlHost || 'localhost';
config.mysqlUser = process.env.mysqlUser || 'root';
config.mysqlPassword = process.env.mysqlPassword || '1111';
config.mysqlDatabase = process.env.mysqlDatabase || 'onuii';

config.redisHost = process.env.redisHost || 'localhost';
config.redisPort = process.env.redisPort || '6379';
config.redisDatabase = process.env.redisDatabase || 0;

config.serverPort = process.env.serverPort || 3000;

export default config;
