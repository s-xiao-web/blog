import { Controller, Get, Req, Param, Post, Body } from '@nestjs/common';
import { Request } from 'express';

import { CreateCatDto } from './dto/create-cat.dto'
import { CatsService  } from './cats.service';
import { Cat } from './interfaces/cat.interface';

import { AppService } from '../app.service'


@Controller('cats')
export class CatsController {

  constructor(
    private catsService: CatsService,
    private appService: AppService
  ) {}

  @Post()
  async create(@Body() createCatDto:CreateCatDto) {
    this.catsService.create(createCatDto);
  }


  @Get('/find')
  findOne(@Param('id') id) {
    // console.log(  );
    return this.appService.getHello()
    // return this.catsService.findOne();
  }
}
