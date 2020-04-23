import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { WidgetsService } from './widgets.service';
import { Controller, Post, Body, Get, Put, Param, HttpStatus, Res, Query, NotFoundException } from '@nestjs/common';
import { Widget } from './interfaces/widget.interface';


@Controller('widgets')
export class WidgetsController {
  constructor(
    private widgetsService: WidgetsService,
  ) { }

  @Get()
  async findAll(): Promise<Widget[]> {
    return this.widgetsService.findAll();
  }

  @Put('/add')
  async addWidget(
    @Res() res,
    @Query('id', new ValidateObjectId()) widgetID,
    @Body() createWidgetDto: CreateWidgetDto
  ): Promise<Widget[]> {
    const editedWidget = await this.widgetsService.addWidget(widgetID, createWidgetDto);

    if (!editedWidget) throw new NotFoundException('Widget does not exist!');

    return res.status(HttpStatus.OK).json({
      message: 'Widget has been successfully updated',
      widget: editedWidget
    })
  }

  @Put('/remove')
  async removeWidget(
    @Res() res,
    @Query('id', new ValidateObjectId()) widgetID,
    @Body() createWidgetDto: CreateWidgetDto
  ): Promise<Widget[]> {
    console.log('remove');
    const editedWidget = await this.widgetsService.removeWidget(widgetID, createWidgetDto);

    if (!editedWidget) throw new NotFoundException('Widget does not exist!');

    return res.status(HttpStatus.OK).json({
      message: 'Widget has been successfully updated',
      widget: editedWidget
    })
  }

  @Post()
  async create(@Body() createWidgetDto: CreateWidgetDto) {
    await this.widgetsService.create(createWidgetDto);

    return {
      "result": "success"
    };
  }
}
