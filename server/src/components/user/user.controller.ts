import { WidgetsService } from './../widgets/widgets.service';
import { Controller, Get, Res, Param, HttpStatus, Put, Body, NotFoundException, Post, Inject, forwardRef } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
import { User } from './interfaces/user.interface';
import { UserDTO } from './dto/user.dto';
import { UpdateWidgetDto } from '../widgets/dto/widget.dto';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private widgetsService: WidgetsService,
  ) {
  }

  @Get('/:userId')
  async findByID(
    @Res() res,
    @Param('userId', new ValidateObjectId()) userId
  ) {
    const user = await this.userService.findUserById(userId);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json(user);
  }

  @Get('/:userId/widgets')
  async findUserWidgets(
    @Res() res,
    @Param('userId', new ValidateObjectId()) userId
  ) {
    const user = await this.userService.findUserById(userId);
    // if (!user.personalWidgets.length) throw new NotFoundException('User does not have widgets');
    return res.status(HttpStatus.OK).json(user.personalWidgets);
  }

  @Post('/addWidget')
  async addWidget(
    @Res() res,
    @Body() updateWidgetDto: UpdateWidgetDto
  ) {
    const { userId, widgetId } = updateWidgetDto;
    const widget = await this.widgetsService.findWidgetById(widgetId);
    const user = await this.widgetsService.addWidget(widgetId, updateWidgetDto);

    const updatedUser = await this.userService.addProperty(
      userId,
      widget,
      'personalWidgets'
    );

    if (!updatedUser) throw new NotFoundException('User does not exist!');

    return res.status(HttpStatus.OK).json({
      message: 'Widget has been successfully added',
      widget: widget
    })
  }

  @Post('/removeWidget')
  async removeWidget(
    @Res() res,
    @Body() body
  ) {
    const { userId, widgetId } = body;
    const updatedUser = await this.userService.removeProperty(
      userId,
      widgetId,
      'personalWidgets'
    );

    if (!updatedUser) throw new NotFoundException('User does not exist!');

    return res.status(HttpStatus.OK).json({
      message: 'Widget has been successfully removed',
      user: updatedUser
    })
  }

  @Put('/update/:userID')
  async userUpdate(
    @Res() res,
    @Body() userDTO: UserDTO
  ): Promise<User[]> {
    const updatedUser = await this.userService.updateUserTeam(userDTO);

    if (!updatedUser) throw new NotFoundException('User does not exist!');

    return res.status(HttpStatus.OK).json({
      message: 'Widget has been successfully updated',
      widget: updatedUser
    })
  }
}
