import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import {
  UseGuards,
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) { }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  tempAUth() {
    return { auth: 'success' }
  }

  @Post('login')
  async login(@Body() userDTO: any) {
    const user = await this.userService.findByLogin(userDTO);

    const payload = {
      username: user.username,
      isSuperAdmin: user.isSuperAdmin
    }

    const token = await this.authService.signPayload(payload);

    return { user, token };
  }

  @Post('register')
  async register(@Body() userDTO: any) {
    const user = await this.userService.create(userDTO);

    const payload = {
      username: user.username,
      isSuperAdmin: user.isSuperAdmin
    }

    const token = await this.authService.signPayload(payload);

    return { user, token };
  }
}
