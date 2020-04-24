import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileModule } from '../profile/profile.module';
import { AuthModule } from '../auth/auth.module';
import { WidgetsModule } from '../widgets/widgets.module';
import { TeamsModule } from '../teams/teams.module';

import config from '../../config/env';


@Module({
  imports: [
    MongooseModule.forRoot(
      config.DB_URI,
      {
        keepAlive: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      }
    ),
    ProfileModule,
    AuthModule,
    WidgetsModule,
    TeamsModule
  ],
})
export class AppModule { }