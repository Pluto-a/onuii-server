//db는 MongoDB를 사용하기때문에 NodeJS와 MongoDB를 연결해주는 라이브러리인 mongoose를 임포트해줍니다.
import mongoose from 'mongoose'

const exampleSchema = new mongoose.Schema({
// JSON형식으로 스키마 생성 
    exampleString: {type: String, required: true, index: true}
// 컬랙션 이름 지정 
}, {collection: 'example'});

// 생성한 스키마를 토대로 모델을 생성합니다.
const exampleModel = mongoose.model('example', exampleSchema);

exampleModel.getAll = () => {
//    mongoose.model안에 함수인 find를 호출함으로써 모든 data를 호출합니다.
    return exampleModel.find();
};

// 다른곳에서 이 파일을 사용할 수 있게 export해줍니다.
export default exampleModel;