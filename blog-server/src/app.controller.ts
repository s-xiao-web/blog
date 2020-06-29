// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(pr ivate readonly appService: AppService) {}

//   @Get()
//   getHello111(): string {
//     return this.appService.getHello();
//   }
// }


import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';



@Controller()
export class AppController {
  constructor() {}
}