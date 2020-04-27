export class CreateWidgetDto {
  name: string;
  description: string;
  type: string;
  slug: string;
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
}

interface UserDTO {
  id: string
}
