import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import config from './config/env';

@Module({
  imports: [
    MongooseModule.forRoot(
      config.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    ),
    SharedModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
