import { CreateWidgetDto } from './dto/create-widget.dto';
import { WidgetsService } from './widgets.service';
import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { Widget } from './interfaces/widget.interface';


@Controller('widgets')
export class WidgetsController {
  constructor(
    private widgetsService: WidgetsService,
  ) { }

  @Get()
  async findAll(): Promise<Widget[]> {
    return this.widgetsService.findAll();
  }

  @Post()
  async create(@Body() createWidgetDto: CreateWidgetDto) {
    await this.widgetsService.create(createWidgetDto);

    return {
      "result": "success"
    };
  }
}
