import * as mongoose from 'mongoose';

export const WidgetSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: String,
  users: Array,
  date: {
    type: Date,
    default: Date.now,
  }
});
