import mongoose from 'mongoose';

const supplementSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  description: String,
  category: String,
});

export default mongoose.model('Supplement', supplementSchema);
