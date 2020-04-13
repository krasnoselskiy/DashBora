import { UserService } from './../shared/user.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) { }

  @Post('login')
  async login(@Body() userDTO: any) {
    return await this.userService.findByLogin(userDTO);
  }

  @Post('register')
  async register(@Body() userDTO: any) {
    return await this.userService.create(userDTO);
  }
}
