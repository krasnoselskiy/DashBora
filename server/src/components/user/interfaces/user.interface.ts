import { Document } from 'mongoose';

export interface User extends Document {
  username: string;
  teams: [];
  readonly password: string;
  isSuperAdmin: boolean;
  created: Date;
}