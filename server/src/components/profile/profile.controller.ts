import { Controller, Get, Res, Param, HttpStatus } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('profile')
export class ProfileController {
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
}
