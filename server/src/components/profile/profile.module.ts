import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';

@Module({
  providers: [],
  imports: [UserModule],
  controllers: [ProfileController]
})
export class ProfileModule {}
