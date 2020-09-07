import {
  Scopes,
  Table,
  Column, 
  Model, 
  PrimaryKey, 
  AutoIncrement,
  DataType,
  HasMany,
  BelongsToMany,
  BelongsTo
} from 'sequelize-typescript';

import { Label } from './label.model';

@Table
export class Article extends Model<Article> {

  

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column
  title: string

  @Column(DataType.TEXT)
  comment: string
  
  @Column
  describe: string

  @Column
  cover: string

  @Column
  user_id: number

  @Column({
    defaultValue: 0
  })
  
  // @BelongsTo(() => Label, { as: 'testsss', foreignKey: 'id', targetKey: 'id' } )
  @HasMany(() => Label, {as: 'label', foreignKey: "id"})
  labelFId: string

  @Column({
    defaultValue: 0
  })
  like_id: number

  static async findData() {
    return this.findAll({
      include: [{
        model: Label,
        // attributes: [],
      }],
      raw: true,
    })
  }
}