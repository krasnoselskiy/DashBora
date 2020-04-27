export class CreateWidgetDto {
  name: string;
  description: string;
  type: string;
  date: Date;
  users: UserDTO[];
}

export class RemoveWidgetDto {
  widgetId: string;
  userId: string;
}

export class UpdateWidgetDto {
  widgetId: string;
  userId: string;
  name: string;
  description: string;
  type: string;
  date: Date;
  users: UserDTO[];
}

interface UserDTO {
  id: string
}
