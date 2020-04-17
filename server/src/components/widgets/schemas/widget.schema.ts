import * as mongoose from 'mongoose';

export const WidgetSchema = new mongoose.Schema({
  name: String,
  date: {
    type: Date,
    default: Date.now,
  }
});
