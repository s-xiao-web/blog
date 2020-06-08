import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class UserList {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public username: string

  @Column()
  public password: string
  
}