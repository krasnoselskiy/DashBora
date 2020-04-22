export class CreateWidgetDto {
  name: string;
  description: string;
  type: string;
  date: Date;
  users: UserDTO[];
}

interface UserDTO {
  id: string
}
