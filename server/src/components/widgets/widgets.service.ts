import { CreateWidgetDto, UpdateWidgetDto, RemoveWidgetDto } from './dto/widget.dto';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
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

  async findAllExcept(userId): Promise<Widget[]> {
    const widgets = await this.widgetModel.find(
      { users: { $not: { $elemMatch: { $nin: [userId] } } } }
    )

    return widgets;
  }

  async addWidget(widgetID, updateWidgetDto: UpdateWidgetDto): Promise<Widget> {
    const { userId } = updateWidgetDto;

    const updatedWidget = await this.widgetModel.findOneAndUpdate(
      { _id: widgetID },
      {
        $addToSet: { users: userId }
      },
      { new: true }
    )

    return updatedWidget;
  }

  async findWidgetById(widgetId) {
    const widget = await this.widgetModel
      .findById(widgetId)
      .exec();

    if (!widget) throw new HttpException('Widget does not exist!',
      HttpStatus.UNAUTHORIZED);

    return widget;
  }

  async removeWidget(
    removeWidgetDto: RemoveWidgetDto
  ): Promise<Widget> {
    const { userId, widgetId } = removeWidgetDto;

    const updatedWidget = await this.widgetModel.findOneAndUpdate(
      { _id: widgetId },
      {
        $pull: { users: userId }
      },
      { new: true }
    )


    return updatedWidget;
  }
}
