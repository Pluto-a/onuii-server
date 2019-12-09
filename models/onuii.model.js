import mongoose from 'mongoose';

const onuiiSchema = new mongoose.Schema({
  user_id: { type: String, required: true, index: true },
  course: { type: String, required: true, index: true },
  cond: { type: String, required: true, index: true },
  status: { type: String, required: true, index: true },
  style: { type: String, required: true, index: true },
  total_score: { type: Number, required: true, index: true },
}, { collection: 'onuii' });

const onuiiModel = mongoose.model('onuii', onuiiSchema);

onuiiModel.getAll = () => {
  return onuiiModel.find();
};

export default onuiiModel;
