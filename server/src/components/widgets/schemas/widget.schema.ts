import * as mongoose from 'mongoose';
import stringToSlug from '../../shared/string-to-slug'
const Schema = mongoose.Schema;

export const WidgetSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: String,
  slug: String,
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

WidgetSchema.pre('save', async function (
  next: mongoose.HookNextFunction
) {
  try {
    this['slug'] = stringToSlug(this.get('name'));
    return next();
  } catch (err) { } finally { }
});