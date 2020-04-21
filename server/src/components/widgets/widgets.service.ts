import { CreateWidgetDto } from './dto/create-widget.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Widget } from './interfaces/widget.interface';

@Injectable()
export class WidgetsService {
  constructor(
    @InjectModel('Widget') private readonly widgetModel: Model<Widget>
  ) { }

  async create(createWidgetDto: CreateWidgetDto): Promise<Widget> {
    const createdWidget = new this.widgetModel(createWidgetDto);
    return createdWidget.save();
  }

  async findAll(): Promise<Widget[]> {
    return this.widgetModel.find().exec();
  }

  async updateOne(widgetID, createWidgetDto: CreateWidgetDto): Promise<Widget> {
    const updatedWidget = await this.widgetModel
      .findByIdAndUpdate(widgetID, createWidgetDto, { new: true });
    return updatedWidget;
  }
}
