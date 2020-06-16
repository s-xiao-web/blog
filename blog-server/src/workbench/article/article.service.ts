import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

import { Article } from '../../models/article.model';

@Injectable()
export class ArticleService {
  @InjectModel(Article)
  private readonly articleModel: typeof Article
  private readonly sequelize: Sequelize

  async createArtic(params) {
    const { comment } = params
    const result = await this.articleModel.create({comment})
    return {
      data: result
    }
  }

  async getArticleList(params) {

    const { id } = params
    const result = await this.articleModel.findOne({
      where: {id}
    })
    return result
  }

}
