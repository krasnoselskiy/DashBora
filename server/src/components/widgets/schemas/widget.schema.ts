import * as mongoose from 'mongoose';

export const WidgetSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: {
    type: Date,
    default: Date.now,
  }
});
