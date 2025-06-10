import mongoose from 'mongoose';

const dietSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  day: String,
  meals: [{
    time: String,
    item: String,
  }],
});

export default mongoose.model('DietPlan', dietSchema);
