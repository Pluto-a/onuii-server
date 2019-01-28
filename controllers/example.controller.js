// model을 다루기위해 이전에 생성한 model을 임포트 해줍니다.
import exampleModel from'../models/example.model'

//객체 생성 
const exampleController = {};

//비동기인 javascript의 콜백문제를 해결하기위해 async이용.
exampleController.getAll = async (req, res) => {
    let result;
    try{
//먼저 result에 exampleModel.getAll();을 사용해 db에서 넘어온 값을 담아줍니다.
//마찬가지로 비동기인 javascript의 콜백문제를 해결하기위해 await을 함께 사용해줍니다.
    result = await exampleModel.getAll();
    } catch (err) {
//에러가 발생하게되면 result에 에러메세지를 담아줍니다.
    result = {result: 'error', message: err.toString()};
    }
//위 try catch에서 담긴 result값을 response로 반환해줍니다.
    res.send(result);
}

// 다른곳에서 이 파일을 사용할 수 있게 export해줍니다.
export default exampleController;