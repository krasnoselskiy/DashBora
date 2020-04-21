import { Document } from 'mongoose';

export interface User extends Document {
  username: string;
  email: string;
  readonly password: string;
  teams: [];
  personalWidgets: [];
  isSuperAdmin: boolean;
  created: Date;
}