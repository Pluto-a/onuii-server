import mongoose from 'mongoose';

const onuiiSchema = new mongoose.Schema({
  user_id: { type: String, required: true, index: true },
  user_name: String,
  courses : [{
    course_id: String,
    course_name: String,
  }],
  tag: [{
    conds: [{
      cond: String,
    }],
    statuses: [{
      status: String,
    }],
    styles: [{
      style: String,
    }],
  }],
  total_score: { type: Number, required: true, index: true },
}, { collection: 'onuii' });

const onuiiModel = mongoose.model('onuii', onuiiSchema);

onuiiModel.addUser = (user) => {
  return new onuiiModel(user).save();
};

onuiiModel.getAll = () => {
  return onuiiModel.find().sort({"total_score" : -1});
};

export default onuiiModel;
