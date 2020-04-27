import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const WidgetSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: String,
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  date: {
    type: Date,
    default: Date.now,
  }
});
