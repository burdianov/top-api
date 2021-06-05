import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Patch,
  HttpCode
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  constructor(private readonly configService: ConfigService) {}

  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {}

  @Get(':id')
  async get(@Param('id') id: number) {
    const res = this.configService.get('TEST');
    return res;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {}

  @Patch(':id')
  async patch(@Param('id') id: number, @Body() dto: TopPageModel) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {}
}
