export class CreateTeamDto {
  name: string;
  description: string;
  lead: string;
  slug: string;
  users: [];
  widgets: [];
  date: Date;
}
