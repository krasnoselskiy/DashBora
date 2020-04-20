import { Module } from '@nestjs/common';
import { TeamSchema } from './schemas/team.schema';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Teams', schema: TeamSchema }])],
  controllers: [TeamsController],
  providers: [TeamsService]
})
export class TeamsModule {}



