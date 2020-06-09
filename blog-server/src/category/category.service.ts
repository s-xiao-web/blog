import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';

import { Category } from '../entity/category.entity'

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}

  async createMenu() {
    // const result = await this.categoryRepository.save(
    //   {
    //     name: '编程',
    //     path: '/'
    //   }
    // )

    // console.log( result );

    // await getConnection().bu
    this.categoryRepository.createQueryBuilder

  }
}


// {
//   name: '编程',
//   path: '/'
// },
// {
//   name: '项目',
//   path: '/article'
// },
// {
//   name: '标签',
//   path: '/tag'
// },
// {
//   name: '归档',
//   path: '/record'
// },
// {
//   name: 'GitHub'
// }