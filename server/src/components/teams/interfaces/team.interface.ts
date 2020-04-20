import { Document } from 'mongoose';

export interface Team extends Document {
  name: string;
  description: string;
  lead: string;
  users: [];
  widgets: [];
  created: Date;
}