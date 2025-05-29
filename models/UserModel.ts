import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  lastName: {
    type: String,
    required: true,
    default: 'lastName',
  },
  location: {
    type: String,
    required: true,
    default: 'my city',
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

export default mongoose.model('User', UserSchema);
