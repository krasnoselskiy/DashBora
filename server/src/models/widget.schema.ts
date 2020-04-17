import * as mongoose from 'mongoose';

export const WidgetSchema = new mongoose.Schema({
  name: String,
  created: {
    type: Date,
    default: Date.now,
  }
});