import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

import * as sequelizes from 'sequelize';

import { Category } from '../../models/category.model';
import { CreateMenuDto } from './dto/create-menu.dto';

@Injectable()
export class CategoryService {

  constructor(
    @InjectModel(Category)
    private readonly categoryModel: typeof Category,
    private readonly sequelize: Sequelize,
  ) {}

  async createMenu(CreatMenuDto: CreateMenuDto) {
    console.log( CreatMenuDto );
    const menu = [
      {
        value: '编程',
        path: '/'
      },
      {
        value: '项目',
        path: '/article'
      },
      {
        value: '标签',
        path: '/tag'
      },
      {
        value: '归档',
        path: '/record'
      },
      {
        value: 'GitHub',
        path: 'GitHub'
      },
    ]
    const { value, path } = CreatMenuDto;
    return await this.categoryModel.bulkCreate(menu)
    // const sql = `
    //   INSERT INTO category (value,path) VALUES ('${value}','${path}')
    // `
    // return await this.sequelize.query(sql, {
    //   type: sequelizes.QueryTypes.INSERT,
    // });
  }

  async getMenus(): Promise<Category[]> {

    const sql = `
      SELECT
        id, value, path
      FROM
        category
    `;
    
    return await this.sequelize.query(sql, {
      type: sequelizes.QueryTypes.SELECT,
      raw: true,
      logging: true
    })
  }
}


// 后续需要解决如何讲这个函数抽离出去
// 需要看下管道 拦截器