import { WidgetSchema } from './schemas/widget.schema';
import { WidgetsService } from './widgets.service';
import { WidgetsController } from './widgets.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Widget', schema: WidgetSchema }])],
  controllers: [WidgetsController],
  providers: [WidgetsService]
})
export class WidgetsModule {}
