import mysql from 'sync-mysql';
import connect from '../db/connect'
import config from "../core/config/config";
import onuiiModel from "../models/onuii.model";
import commonController from "./common.controller";

const onuiiController = {};

const connection = new mysql({
  host: config.mysqlHost,
  user: config.mysqlUser,
  password: config.mysqlPassword,
  database: config.mysqlDatabase,
});

onuiiController.addUser = (req, res) => {
  commonController.response(res, async () => {
    var user;
    var courses = new Array();
    var tags;
    var conds = new Array();
    var statuses = new Array();
    var styles = new Array();
    var total_score;
    console.log(req.body.user_id,'@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    // if(req.body){
    //   total_score = connection.query(`select a.user_id, a.score + b.style_score as total from (select a.user_id, a.cond_score + b.status_score as score from (select a.user_id, count(b.cond_id) as cond_score from user a left join user_cond b on a.user_id = b.user_id group by a.user_id) a left join (select a.user_id, count(b.status_id)*5 as status_score from user a left join user_status b on a.user_id = b.user_id group by a.user_id) b on a.user_id = b.user_id) a left join (select a.user_id, count(b.style_id)*3 as style_score from user a left join user_style b on a.user_id = b.user_id group by a.user_id) b on a.user_id = b.user_id where a.user_id = ${req.body.user_id}`)[0].total;
    //   console.log(`user num = ${req.body.user_id}`);
    //   connection.query(`select * from user_course where user_id=${req.body.user_id}`).forEach(async a=> {
    //     // courses.push({
    //     //   course_id: connection.query(`select * from course where course_id =${a.course_id}`)[0].course_id,
    //     //   course_name: connection.query(`select * from course where course_id =${a.course_id}`)[0].course_name,
    //     // })
    //     // console.log(courses);
    //     connection.query(`select * from course where course_id =${a.course_id}`).forEach(async b => {
    //       courses.push({
    //         course_id: b.course_id,
    //         course_name: b.course_name,
    //       });
    //     })
    //   })
    //
    //   connection.query(`select * from user_cond where user_id=${req.body.user_id}`).forEach(async a=> {
    //     connection.query(`select * from cond where cond_id =${a.cond_id}`).forEach(async b => {
    //       conds.push({cond : b.cond});
    //     })
    //   })
    //
    //   connection.query(`select * from user_status where user_id=${req.body.user_id}`).forEach(async a=> {
    //     connection.query(`select * from status where status_id =${a.status_id}`).forEach(async b => {
    //       statuses.push({status : b.status});
    //     })
    //   })
    //
    //   connection.query(`select * from user_style where user_id=${req.body.user_id}`).forEach(async a=> {
    //     connection.query(`select * from style where style_id =${a.style_id}`).forEach(async b => {
    //       styles.push({style : b.style});
    //     })
    //     console.log('styles are =', styles);
    //   })
    //
    //   tags = {
    //     conds: conds,
    //     statuses: statuses,
    //     styles: styles,
    //   }
    //
    //   console.log('tags are ===============', tags);
    //
    //   user = {
    //     user_id: req.body.user_id,
    //     courses : courses,
    //     tag: tags,
    //     total_score: total_score,
    //   }
    //
    //   courses = new Array();
    //   tags = new Array();
    //   conds = new Array();
    //   statuses = new Array();
    //   styles = new Array();
    //
    //   console.log(user);
    //   console.log(user.tag.conds);
    //   user = await onuiiModel.addUser(user);
    //
    //   console.log("data sucessfully added!!!!!!!!!!!!!!")
    //   return{
    //     result:'sucess',
    //     data: user,
    //   }
    // }else{
    connection.query('select * from user').forEach(async (e) => {

      console.log('eeeeeeeeeeeeeeeeeee',e, e.user_id, e.user_name);

      total_score = connection.query(`select a.user_id, a.score + b.style_score as total from (select a.user_id, a.cond_score + b.status_score as score from (select a.user_id, count(b.cond_id) as cond_score from user a left join user_cond b on a.user_id = b.user_id group by a.user_id) a left join (select a.user_id, count(b.status_id)*5 as status_score from user a left join user_status b on a.user_id = b.user_id group by a.user_id) b on a.user_id = b.user_id) a left join (select a.user_id, count(b.style_id)*3 as style_score from user a left join user_style b on a.user_id = b.user_id group by a.user_id) b on a.user_id = b.user_id where a.user_id = ${e.user_id}`)[0].total;
      console.log(`user num = ${e.user_id}`);
      connection.query(`select * from user_course where user_id=${e.user_id}`).forEach(async a=> {
        // courses.push({
        //   course_id: connection.query(`select * from course where course_id =${a.course_id}`)[0].course_id,
        //   course_name: connection.query(`select * from course where course_id =${a.course_id}`)[0].course_name,
        // })
        // console.log(courses);
        connection.query(`select * from course where course_id =${a.course_id}`).forEach(async b => {
          courses.push({
            course_id: b.course_id,
            course_name: b.course_name,
          });
        })
      })

      connection.query(`select * from user_cond where user_id=${e.user_id}`).forEach(async a=> {
        connection.query(`select * from cond where cond_id =${a.cond_id}`).forEach(async b => {
          conds.push({cond : b.cond});
        })
      })

      connection.query(`select * from user_status where user_id=${e.user_id}`).forEach(async a=> {
        connection.query(`select * from status where status_id =${a.status_id}`).forEach(async b => {
          statuses.push({status : b.status});
        })
      })

      connection.query(`select * from user_style where user_id=${e.user_id}`).forEach(async a=> {
        connection.query(`select * from style where style_id =${a.style_id}`).forEach(async b => {
          styles.push({style : b.style});
        })
        console.log('styles are =', styles);
      })

      tags = {
        conds: conds,
        statuses: statuses,
        styles: styles,
      }

      console.log('tags are ===============', tags);

      user = {
        user_id: e.user_id,
        user_name: e.user_name,
        courses : courses,
        tag: tags,
        total_score: total_score,
      }

      courses = new Array();
      tags = new Array();
      conds = new Array();
      statuses = new Array();
      styles = new Array();

      await onuiiModel.addUser(user);

      console.log("data sucessfully added!!!!!!!!!!!!!!")

    })
    return {
      result: 'success',
    };
    // }
  })
}

onuiiController.getAll = async (req, res) => {
  try{
    const onuii = await onuiiModel.getAll();
    res.send(onuii)
  }catch (e) {
    res.send(e);
  }
}

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
