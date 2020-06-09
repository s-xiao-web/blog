import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { User } from '../entitys/user.entity';

import { UserList } from '../entity/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserList)
    private usersRepository: Repository<UserList>
  ) {}
  async create(data) {
    let u = new UserList()
    // u.username = 'asdasdasdasd'
    // u.password = '123123'
    // await this.usersRepository.save(u).then(res => {
    //   console.log(res);
    // })
    const d = await this.usersRepository.findOne({id:1})
    console.log(d);
    return d
    // return this.usersRepository.create({});
  }
}
