import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
import { CreateWidgetDto, UpdateWidgetDto, RemoveWidgetDto } from './dto/widget.dto';
import { WidgetsService } from './widgets.service';
import { Controller, Post, Body, Get, Put, Param, HttpStatus, Res, Query, NotFoundException, Inject, forwardRef } from '@nestjs/common';
import { Widget } from './interfaces/widget.interface';
import { UserService } from '../user/user.service';


@Controller('widgets')
export class WidgetsController {
  constructor(
    private widgetsService: WidgetsService,
    private userService: UserService,
  ) { }

  @Get('/:userId')
  async findAllExceptAdded(
    @Res() res,
    @Param('userId', new ValidateObjectId()) userId
  ) {
    const widgets = await this.widgetsService.findAllExcept(userId);

    // if (!widgets.length) throw new NotFoundException('We have no widgets!');

    return res.status(HttpStatus.OK).json(widgets)
  }

  @Post('/create')
  async createWidget(
    @Res() res,
    @Body() createWidgetDto: CreateWidgetDto
  ): Promise<Widget[]> {
    const widget = await this.widgetsService.create(createWidgetDto);

    if (!widget) throw new NotFoundException('Cant create this widget!');

    return res.status(HttpStatus.OK).json({
      message: 'Widget has been successfully updated',
      // widget: widget
    })
  }

  @Post('/add')
  async addWidget(
    @Res() res,
    @Query('id', new ValidateObjectId()) widgetID,
    @Body() updateWidgetDto: UpdateWidgetDto
  ): Promise<Widget[]> {

    const widget = await this.widgetsService.addWidget(widgetID, updateWidgetDto);

    if (!widget) throw new NotFoundException('Widget does not exist!');

    return res.status(HttpStatus.OK).json({
      message: 'Widget has been successfully updated',
      widget: widget
    })
  }

  @Post('/remove')
  async removeWidget(
    @Res() res,
    @Query('id', new ValidateObjectId()) widgetID,
    @Body() removeWidgetDto: RemoveWidgetDto
  ): Promise<Widget[]> {

    const { userId, widgetId } = removeWidgetDto;
    const removedWidget = await this.widgetsService.removeWidget(removeWidgetDto);
    const updatedUser = await this.userService.removeProperty(
      userId,
      widgetId,
      'personalWidgets'
    );

    if (!removedWidget || !updatedUser) throw new NotFoundException('Widget or user does not exist!');

    return res.status(HttpStatus.OK).json({
      message: 'Widget has been successfully updated',
      widget: removedWidget,
      user: updatedUser
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
