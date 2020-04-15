import { AuthService } from './auth.service';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Strategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import config from '../config/env';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.token.secret
    });
  }

  async validate(payload: any, done: VerifiedCallback) {
    const user = await this.authService.validateUser(payload);

    if (!user) {
      throw new HttpException('Unautharized access',
        HttpStatus.UNAUTHORIZED);
    }

    return done(null, user, payload.iat)
  }
}