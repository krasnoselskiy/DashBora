import { Controller, Post, Body, Get } from '@nestjs/common';
import { Team } from './interfaces/team.interface';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamsService } from './teams.service';


@Controller('teams')
export class TeamsController {
  constructor(
    private teamsService: TeamsService,
  ) { }

  @Get()
  async findAll(): Promise<Team[]> {
    return this.teamsService.findAll();
  }

  @Post()
  async create(@Body() createTeamDto: CreateTeamDto) {
    await this.teamsService.create(createTeamDto);

    return {
      "result": "success"
    };
  }
}
