import * as mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema({
  name: String,
  lead: String,
  description: String,
  users: Array,
  widgets: Array,
  date: {
    type: Date,
    default: Date.now,
  }
});
