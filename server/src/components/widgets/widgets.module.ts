import { UserModule } from './../user/user.module';
import { WidgetSchema } from './schemas/widget.schema';
import { WidgetsService } from './widgets.service';
import { WidgetsController } from './widgets.controller';
import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from '../user/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Widget', schema: WidgetSchema }
    ]),
    forwardRef(() => UserModule)
  ],
  controllers: [WidgetsController],
  exports: [WidgetsService],
  providers: [WidgetsService]
})
export class WidgetsModule {}
