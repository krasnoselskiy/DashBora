import { Controller, Get, Res, Param, HttpStatus, Put, Body, Query, NotFoundException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
import { User } from './interfaces/user.interface';
import { UserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
  ) {
  }

  @Get('/:userID')
  // @UseGuards(AuthGuard('jwt'))
  async findByID(
    @Res() res,
    @Param('userID', new ValidateObjectId()) userID
  ) {
    const user = await this.userService.findUserById(userID);
    return res.status(HttpStatus.OK).json(user);
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
