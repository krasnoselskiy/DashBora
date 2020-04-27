import * as mongoose from 'mongoose';
import stringToSlug from '../../shared/string-to-slug'

export const TeamSchema = new mongoose.Schema({
  name: String,
  lead: String,
  description: String,
  slug: String,
  isConfirmed: Boolean,
  users: Array,
  widgets: Array,
  date: {
    type: Date,
    default: Date.now,
  }
});

TeamSchema.pre('save', async function (
  next: mongoose.HookNextFunction
) {
  try {
    this['slug'] = stringToSlug(this.get('name'));
    return next();
  } catch (err) { } finally { }
});