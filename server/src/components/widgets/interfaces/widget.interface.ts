import { Document } from 'mongoose';

export interface Widget extends Document {
  name: string;
  description: string;
  created: Date;
}