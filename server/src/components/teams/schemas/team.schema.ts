import * as mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema({
  name: String,
  users: Array,
  widgets: Array,
  date: {
    type: Date,
    default: Date.now,
  }
});
