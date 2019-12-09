// 라이브러리들을 임포트해줍니다.
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import logger from './core/logger/app-logger';
import config from './core/config/config';
import connectToDb from './db/connect';
import onuiiRouter from './routes/onuii.route';

const port = config.serverPort;

const app = express();

connectToDb();

app.use(cors());
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

app.use('/onuii', onuiiRouter);

app.listen(port, () => {
  logger.info('Server Started on Port : ', port);
});
