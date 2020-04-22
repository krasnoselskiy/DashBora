export interface UserDTO {
  _id: string;
  username: string;
  email: string;
  readonly password: string;
  teams: TeamDTO[];
  personalWidgets: [];
  isSuperAdmin: boolean;
  created: Date;
}

export interface TeamDTO {
  id: string
}