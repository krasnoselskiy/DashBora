import { AuthService } from './auth.service';
import { UserService } from './../shared/user.service';
import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
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
    return { auth: 'works' }
  }

  @Post('login')
  async login(@Body() userDTO: any) {
    const user = await this.userService.findByLogin(userDTO);

    const payload = {
      username: user.username,
      seller: user.seller
    }

    const token = await this.authService.signPayload(payload);

    return { user, token };
  }

  @Post('register')
  async register(@Body() userDTO: any) {
    const user = await this.userService.create(userDTO);

    const payload = {
      username: user.username,
      seller: user.seller
    }

    const token = await this.authService.signPayload(payload);

    return { user, token };
  }
}
