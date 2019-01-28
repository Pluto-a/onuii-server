//라이브러리들을 임포트해줍니다.
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import config from './core/config/config'
import connectToDb from './db/connect'

import exampleRouter from './routes/example.route'

//포트를 지정해줍니다.
const port = config.serverPort;

//미들웨어들을 먼저 불러옵니다.
const app = express();


connectToDb();

app.use(cors());
//파라미터를 편리하게 추출하기위해 bodyParser라는 라이브러리를 사용합니다. 
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));

//라우팅을 해준 파일 앞에 들어갈 주소를 지정합니다.
//예:) /example/getAll
app.use('/example', exampleRouter);

//서버를 생성합니다.
app.listen(port, () => {
});