import Mongoose from 'mongoose';
import mysql from 'sync-mysql';
import logger from '../core/logger/app-logger';
import config from '../core/config/config';
import redis from 'redis';
import {MysqlRedisAsync, HashTypes, Caching} from 'mysql-redis';

const cacheOptions = {
  expire: 2629746,// seconds, defaults to 30 days
  keyPrefix: "sql.", // default
  hashType: HashTypes.md5, //default
  caching: Caching.CACHE //default
};

const redisConn = redis.createClient({
  host: config.redisHost,
  port: config.redisPort,
  db: config.redisDatabase,
});

Mongoose.Promise = global.Promise;
// eslint-disable-next-line new-cap
const connection = new mysql({
  host: config.mysqlHost,
  user: config.mysqlUser,
  password: config.mysqlPassword,
  database: config.mysqlDatabase,
});

const mysqlRedis = new MysqlRedisAsync(
    connection,
    redisConn,
    cacheOptions,
);

let result;
let fields;
let data;
async function a(sql){
  try{

    [result, fields, data] = await mysqlRedis.query(sql, );
    console.log(result);
    }catch(err){
      console.log(err);
  }
return result;
}


a('select a.user_id, a.score + b.style_score as total from (select a.user_id, a.cond_score + b.status_score as score from (select a.user_id, count(b.cond_id) as cond_score from user a left join user_cond b on a.user_id = b.user_id group by a.user_id) a left join (select a.user_id, count(b.status_id)*5 as status_score from user a left join user_status b on a.user_id = b.user_id group by a.user_id) b on a.user_id = b.user_id) a left join (select a.user_id, count(b.style_id)*3 as style_score from user a left join user_style b on a.user_id = b.user_id group by a.user_id) b on a.user_id = b.user_id order by total desc');

if(connection.query('select * from user').length < 1){
for (let aa = 1; aa < 1001; aa++) {
  connection.query(`insert into user(user_name) values(${aa})`);


  const courseCnt = Math.floor(Math.random() * (connection.query('select count(*) as cnt from course')[0].cnt)) + 1;

  const courseAr = new Array();
  let courseTemp;
  let courseRnum;

  for (var i = 1; i <= courseCnt; i++) {
    courseAr.push(i);
  }

  for (var i = 0; i < courseAr.length; i++) {
    courseRnum = Math.floor(Math.random() * courseCnt);
    courseTemp = courseAr[i];
    courseAr[i] = courseAr[courseRnum];
    courseAr[courseRnum] = courseTemp;
  }

  console.log(courseAr);

  courseAr.forEach((c) => {
    connection.query(`insert into user_course(user_id, course_id) values(${aa},${c})`);
    console.log(c);
  });


  const condCnt = Math.floor(Math.random() * (connection.query('select count(*) as cnt from cond')[0].cnt)) + 1;
  const condAr = new Array();
  let condTemp;
  let condRnum;

  for (var i = 1; i <= condCnt; i++) {
    condAr.push(i);
  }

  for (var i = 0; i < condAr.length; i++) {
    condRnum = Math.floor(Math.random() * condCnt);
    condTemp = condAr[i];
    condAr[i] = condAr[condRnum];
    condAr[condRnum] = condTemp;
  }

  console.log(condAr);

  condAr.forEach((c) => {
    connection.query(`insert into user_cond(user_id, cond_id) values(${aa},${c})`);
    console.log(c);
  });

  const statusCnt = Math.floor(Math.random() * (connection.query('select count(*) as cnt from status')[0].cnt)) + 1;
  const statusAr = new Array();
  let statusTemp;
  let statusRnum;

  for (var i = 1; i <= statusCnt; i++) {
    statusAr.push(i);
  }

  for (var i = 0; i < statusAr.length; i++) {
    statusRnum = Math.floor(Math.random() * statusCnt);
    statusTemp = statusAr[i];
    statusAr[i] = statusAr[statusRnum];
    statusAr[statusRnum] = statusTemp;
  }

  console.log(statusAr);

  statusAr.forEach((c) => {
    connection.query(`insert into user_status(user_id, status_id) values(${aa},${c})`);
    console.log(c);
  });

  const styleCnt = Math.floor(Math.random() * (connection.query('select count(*) as cnt from style')[0].cnt)) + 1;
  const styleAr = new Array();
  let styleTemp;
  let styleRnum;

  for (var i = 1; i <= styleCnt; i++) {
    styleAr.push(i);
  }

  for (var i = 0; i < styleAr.length; i++) {
    styleRnum = Math.floor(Math.random() * styleCnt);
    styleTemp = styleAr[i];
    styleAr[i] = styleAr[styleRnum];
    styleAr[styleRnum] = styleTemp;
  }

  console.log(styleAr);

  styleAr.forEach((c) => {
    connection.query(`insert into user_style(user_id, style_id) values(${aa},${c})`);
    console.log(c);
  });

  connection.query(`insert into tutor(tutor_name) values(${aa})`);


  const tuCourseCnt = Math.floor(Math.random() * (connection.query('select count(*) as cnt from course')[0].cnt)) + 1;

  const tuCourseAr = new Array();
  let tuCourseTemp;
  let tuCourseRnum;

  for (var i = 1; i <= tuCourseCnt; i++) {
    tuCourseAr.push(i);
  }

  for (var i = 0; i < tuCourseAr.length; i++) {
    tuCourseRnum = Math.floor(Math.random() * tuCourseCnt);
    tuCourseTemp = tuCourseAr[i];
    tuCourseAr[i] = tuCourseAr[tuCourseRnum];
    tuCourseAr[tuCourseRnum] = tuCourseTemp;
  }

  console.log(tuCourseAr);

  tuCourseAr.forEach((c) => {
    connection.query(`insert into tutor_course(tutor_id, course_id) values(${aa},${c})`);
    console.log(c);
  });


  const tuCondCnt = Math.floor(Math.random() * (connection.query('select count(*) as cnt from cond')[0].cnt)) + 1;
  const tuCondAr = new Array();
  let tuCondTemp;
  let tuCondRnum;

  for (var i = 1; i <= tuCondCnt; i++) {
    tuCondAr.push(i);
  }

  for (var i = 0; i < tuCondAr.length; i++) {
    tuCondRnum = Math.floor(Math.random() * tuCondCnt);
    tuCondTemp = tuCondAr[i];
    tuCondAr[i] = tuCondAr[tuCondRnum];
    tuCondAr[tuCondRnum] = tuCondTemp;
  }

  console.log(tuCondAr);

  tuCondAr.forEach((c) => {
    connection.query(`insert into tutor_cond(tutor_id, cond_id) values(${aa},${c})`);
    console.log(c);
  });

  const tuStyleCnt = Math.floor(Math.random() * (connection.query('select count(*) as cnt from style')[0].cnt)) + 1;
  const tuStyleAr = new Array();
  let tuStyleTemp;
  let tuStyleRnum;

  for (var i = 1; i <= tuStyleCnt; i++) {
    tuStyleAr.push(i);
  }

  for (var i = 0; i < tuStyleAr.length; i++) {
    tuStyleRnum = Math.floor(Math.random() * tuStyleCnt);
    tuStyleTemp = tuStyleAr[i];
    tuStyleAr[i] = tuStyleAr[tuStyleRnum];
    tuStyleAr[tuStyleRnum] = tuStyleTemp;
  }

  console.log(tuStyleAr);

  tuStyleAr.forEach((c) => {
    connection.query(`insert into tutor_style(tutor_id, style_id) values(${aa},${c})`);
    console.log(c);
  });
}
}


const connectToDb = async () => {
  const mongoHost = config.mongoHost;
  const mongoPort = config.mongoPort;
  const mongoName = config.mongoName;
  try {
    await Mongoose.connect(`mongodb://${mongoHost}:${mongoPort}/${mongoName}`, { useMongoClient: true });
    logger.info('Connected to mongo!!!');
  } catch (err) {
    logger.error('Could not connect to MongoDB');
  }
};

export default connectToDb;
