import { Controller, Post, Body, Get, NotFoundException, HttpStatus, Res } from '@nestjs/common';
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

  @Post('/create')
  async create(
    @Res() res,
    @Body() createTeamDto: CreateTeamDto
  ) {
    const team =  await this.teamsService.create(createTeamDto);

    if (!team) throw new NotFoundException('Cant create this team!');

    return res.status(HttpStatus.OK).json({
      message: 'Team has been successfully created',
      team: team
    })
  }
}
