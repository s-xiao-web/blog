import { Controller, Post, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('base')
export class UserController {

  constructor(private readonly userService: UserService){}

  @Post('login')
  userLogin(@Body() params:UserDto) {
    return this.userService.userLogin(params);
  }

  @Post('list')
  sendBaseJson(@Body() params) {
    // 品名 json 测试
    return {
      "pageCount": 2,
      "total": 15,
      "code": "RES_00001",
      "data": {
        "result": [
          {"gnaName":"聚乙烯new","wmsAccount":"7","gnaid":"1"},
          {"gnaName":"聚丙烯new","wmsAccount":"7","gnaid":"1"},
          {"gnaName":"天然生胶new","wmsAccount":"7","gnaid":"1"},
          // {"gnaName":"聚氯乙烯树脂","wmsAccount":"1","gnaid":"1"},
          // {"gnaName":"丁二烯橡胶","wmsAccount":"1","gnaid":"1"},
          // {"gnaName":"丁苯橡胶","wmsAccount":"1","gnaid":"1"},
          // {"gnaName":"硝酸磷钾肥","wmsAccount":"1","gnaid":"1"},
          // {"gnaName":"硝酸磷肥","wmsAccount":"1","gnaid":"1"},
          // {"gnaName":"有机肥料","wmsAccount":"1","gnaid":"1"},
          // {"gnaName":"合成复合肥料	","wmsAccount":"8","gnaid":"1"},
          // {"gnaName":"化肥	","wmsAccount":"8","gnaid":"1"},
          // {"gnaName":"氯化钾	","wmsAccount":"8","gnaid":"1"},
          // {"gnaName":"水溶肥	","wmsAccount":"8","gnaid":"1"},
          // {"gnaName":"聚苯乙烯	","wmsAccount":"8","gnaid":"1"},
          // {"gnaName":"尿素222	","wmsAccount":"8","gnaid":"1"},
        ]
      },
      "success": true,
      "pageSize": 10,
      "message": "请求成功",
      "pageNum": 2
    }
  }

}
