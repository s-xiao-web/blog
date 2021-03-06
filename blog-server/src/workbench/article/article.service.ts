import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

import { Article } from '../../models/article.model';
import { Label } from '../../models/label.model';
import { formatResult } from '../../utils/tools'
import { Model } from 'sequelize';


@Injectable()
export class ArticleService {
  @InjectModel(Article)
  private readonly articleModel: typeof Article
  private readonly sequelize: Sequelize

  // 新增文章
  async addArticle(params) {

    const { label } = params;
    const data = await this.articleModel.build({...params, label_id: label.toString()});
    await data.save();
    return data;
  }

  // 获取文章列表
  async getArticleList() {
    const data = await this.articleModel.findAll({
      raw: true,
      include:[
        { 
          model: Label,
          
          // as: 'labelList'
          // attributes:

        }
      ]
      // include: [
      //   {
      //     model: Label,
      //     as: 'labelInfo'
      //   }
      // ]
     
    }, )
    return data
  }

  // 删除文章
  async deleteArticle(id) {
    const data = await this.articleModel.destroy({where: {...id}})
    return formatResult(data);
  }

  // 图片上传
  async uploadImg() {

  }

  async createArtic(params) {
    const { comment } = params
    const result = await this.articleModel.create({comment})
    return {
      data: result
    }
  }

  // async getArticleList(params) {

  //   const { id } = params
  //   const result = await this.articleModel.findOne({
  //     where: {id}
  //   })
  //   return result
  // }

}
