import mongoose from 'mongoose';

const zipSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  city: String,
  name: String,
  pop: Number,
  state: String,
});

export default mongoose.model('Zip', zipSchema);
