import { UserService } from '../../shared/user.service';
import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import config from '../../config/env';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) { }

  async signPayload(payload: any) {
    return sign(payload, config.token.secret, { expiresIn: config.token.expiresIn})
  }

  async validateUser(payload: any) {
    return await this.userService.findByPayload(payload)
  }
}
