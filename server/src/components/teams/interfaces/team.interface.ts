import { Document } from 'mongoose';

export interface Team extends Document {
  name: string;
  description: string;
  lead: string;
  slug: string;
  isConfirmed: Boolean;
  users: [];
  widgets: [];
  created: Date;
}