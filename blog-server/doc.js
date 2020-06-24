/*
1、controller - 控制器
  控制器的目的是接受应用程序的特定请求

  import { Controller } from '@nestjs/common'

  @Controller()装饰器
  说明： 指定这个当前类的请求路径， 可以理解为添加前缀,用于请求路径的映射
  创建： npx nest g controller class filename

  import { Req } from '@nestjs/commom'
  import { request } from 'express'

  一般情况下，常用 @Body, @Query, @Params, @Headers, @Ip

  @Get
  @Get(':id') 可以用于动态路由
  findOne(@Req() request: request):string {}

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This action returns a #${id} cat`;
  }

  完成的案列
  import { Controller, Get, Query } from '@nestjs/common'

  @Controller('module path')
  export class User() {
    @Post()
    saveInfo() {
      return 
    }
  }
*/

/*
2、service - 负责数据的存储和检索
  import { Injectable } from '@nestjs/common';
  
  nest g service cats

  @Injectable()
  export class UserService {

    private readonly cats:Cats[] // 相当于是声明了一个属性
    
    createUser() {} //这个相当于方法


  }

*/

/*
*
* 关于 @module()
imports： 导入模块, 或者导入其他的模块
prividers: 用于讲注入的服务，在当前模块间共享
controllers： 用于实例化一组控制器
exports: 导出当前模块

*/

// 其他的一些知识

/*

  关于 DTO，适用于描述请求参数 request
  关于 VO ，适用于面熟返回数据 response

  基本的注入服务全是通过类的构造器进行~

  export class UserController {

    constructor( 
      private userServer: UserServer
    ) {}
    
    @Get()
    getTableData() {
      
    }
  }

*/