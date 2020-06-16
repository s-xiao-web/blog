import { Controller, Post, Body, Get, Req, Param } from '@nestjs/common';
import { Request } from 'express';


import { ArticleService } from './article.service';

// import { UserDto } from './dto/user.dto';

@Controller('article')
export class ArticleController {

  constructor(private readonly articleService: ArticleService){}

  @Post('create')
  createArtic(@Body() params) {
    return this.articleService.createArtic(params);
  }

  @Get('articleList')
  getArticle(@Req() request:Request) {
    return this.articleService.getArticleList(request.query)
  }
}
