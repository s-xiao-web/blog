import { Controller, Post, Body, Get, Req, Param, UseInterceptors, UploadedFile,UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor  } from '@nestjs/platform-express';

import { ArticleService } from './article.service';

// import { UserDto } from './dto/user.dto';

@Controller('article')
export class ArticleController {

  constructor(private readonly articleService: ArticleService){}

  @Get('test')
  test() {
    return '访问成功'
  }

  @Post('uploadImg')
  @UseInterceptors(FileInterceptor('cover'))
  UploadedFile(@UploadedFile() file, @Body() body) {
    return '请求成功了'
  }

  @Post('addArticle')
  addArticle(@Body() request) {
    return this.articleService.addArticle(request);
  }

  @Get('getArticleList')
  getArticleList() {
    return this.articleService.getArticleList();
  }

  @Post('deleteArticle')
  deleteArticle(@Body() id) {
    return this.articleService.deleteArticle(id);
  }

  @Post('create')
  createArtic(@Body() params) {
    return this.articleService.createArtic(params);
  }


  // @Get('articleList')
  // getArticle(@Req() request:Request) {
  //   return this.articleService.getArticleList(request.query)
  // }
}
