import { Document } from 'mongoose';

export interface Team extends Document {
  name: string;
  users: [];
  widgets: [];
  created: Date;
}