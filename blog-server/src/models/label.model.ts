import {
  Table,
  Column, 
  Model, 
  PrimaryKey, 
  AutoIncrement,
} from 'sequelize-typescript';

@Table
export class Label extends Model<Label> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column
  content: string

}