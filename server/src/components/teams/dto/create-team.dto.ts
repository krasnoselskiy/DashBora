export class CreateTeamDto {
  name: string;
  description: string;
  lead: string;
  users: [];
  widgets: [];
  date: Date;
}
