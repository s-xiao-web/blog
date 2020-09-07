import {
  Table,
  Column, 
  Model, 
  PrimaryKey, 
  AutoIncrement,
  ForeignKey,
  Scopes,
  BelongsTo,
  BelongsToMany
} from 'sequelize-typescript';

import { Article } from './article.model';


@Table({
  // tableName: ''
})
export class Label extends Model<Label> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column
  content: string

  @Column({
    defaultValue: 0
  })
  articles: number
  
}