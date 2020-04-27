import { Document } from 'mongoose';

export interface Widget extends Document {
  name: string;
  slug: string;
  description: string;
  readonly type: string;
  users: UserDTO[];
  created: Date;
}

interface UserDTO {
  id: string
}