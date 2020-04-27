import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

export const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  teams: [{
    type: Schema.Types.ObjectId,
    ref: 'team'
  }],
  personalWidgets: [],
  isSuperAdmin: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now,
  }
});

UserSchema.pre('save', async function (
  next: mongoose.HookNextFunction
) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashed = await bcrypt.hash(this['password'], 10);
    this['password'] = hashed;
    return next();
  } catch (err) { } finally { }
});