import { WidgetSchema } from './../models/widget.schema';
import { UserSchema } from './../models/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'User',
      schema: UserSchema
    }]),
    MongooseModule.forFeature([{
      name: 'Widgets',
      schema: WidgetSchema
    }])
  ],
  providers: [UserService],
  exports: [UserService],
})
export class SharedModule {}
