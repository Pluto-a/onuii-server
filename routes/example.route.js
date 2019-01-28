//http통신을 위해 express를 임포트해줍니다.
import express from "express"
//request가 들어온 주소로 해당 메서드를 연결해주기위해 이전에 생성한 controller를 임포트해줍니다.
import exampleController from "../controllers/example.controller"

//express를 간편하게 사용하기위해 객체에 담아줍니다.
const exampleRouter = express.Router()

//원하는 주소로 원하는 메서드를 연결해줍니다.
//일단 이 tutorial에선 메서드명과 주소를 일치시켜줍니다.
exampleRouter.get('/getall', (req, res) => {
//router.get에서 타고들어온 주소를 연결시켜줄 메서드를 연결시켜줍니다.
    exampleController.getAll(req, res);
});

// 다른곳에서 이 파일을 사용할 수 있게 export해줍니다.
export default exampleRouter;