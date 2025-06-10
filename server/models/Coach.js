import mongoose from 'mongoose';

const coachSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: Number,
  contact: String,
  availableTime: String,
});

export default mongoose.model('Coach', coachSchema);
