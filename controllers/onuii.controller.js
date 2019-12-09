import mysql from 'sync-mysql';
import connect from '../db/connect'
import config from "../core/config/config";
import onuiiModel from "../models/onuii.model";

const onuiiController = {};

const connection = new mysql({
  host: config.mysqlHost,
  user: config.mysqlUser,
  password: config.mysqlPassword,
  database: config.mysqlDatabase,
});

onuiiController.getRank = (req, res) => {

  let result;
  try {
    result = connection.query('select a.user_id, a.score + b.style_score as total from (select a.user_id, a.cond_score + b.status_score as score from (select a.user_id, count(b.cond_id) as cond_score from user a left join user_cond b on a.user_id = b.user_id group by a.user_id) a left join (select a.user_id, count(b.status_id)*5 as status_score from user a left join user_status b on a.user_id = b.user_id group by a.user_id) b on a.user_id = b.user_id) a left join (select a.user_id, count(b.style_id)*3 as style_score from user a left join user_style b on a.user_id = b.user_id group by a.user_id) b on a.user_id = b.user_id order by total desc');
  } catch (e) {
    result = { result: 'error', message: e.toString() };
  }
  res.send(result);
}

export default onuiiController;
