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

  // https://local-admin-base.utools.club/api/base/
  @Post('good_no')
  sendBaseJson(@Body() params) {
    console.log('good_no');
    // 品名 json 测试
    return {
      "pageCount": 1,
      "total": 15,
      "code": "RES_00001",
      "data": {
        "result": [
          {"gnaName":"聚乙烯old","wmsAccount":"7","gnaid":"1"},
          {"gnaName":"聚丙烯old","wmsAccount":"7","gnaid":"2"},
          {"gnaName":"天然生胶old","wmsAccount":"7","gnaid":"3"},
        ]
      },
      "success": true,
      "pageSize": 10,
      "message": "请求成功",
      "pageNum": 1
    }
    
    // return {
    //   "pageCount": null,
    //   "total": null,
    //   "code": "RES_00007",
    //   "data": null,
    //   "success": false,
    //   "pageSize": null,
    //   "message": "error",
    //   "pageNum": null
    // }
  }

  // 排号
  @Post('spec_no')
  sendSpecJson() {
    console.log('spec_no');
    return {
      "pageCount": 1,
      "total": 15,
      "code": "RES_00001",
      "data": {
        "result": [
          {"speName":"H30S-B","wmsAccount":"7","speId":"1"},
          {"speName":"6094","wmsAccount":"7","speId":"2"},
          {"speName":"S1003","wmsAccount":"7","speId":"3"},
        ]
      },
      "success": true,
      "pageSize": 10,
      "message": "请求成功",
      "pageNum": 1
    }
    // return {
    //   "pageCount": null,
    //   "total": null,
    //   "code": "RES_00007",
    //   "data": null,
    //   "success": false,
    //   "pageSize": null,
    //   "message": "error",
    //   "pageNum": null
    // }
  }

  // 等级
    // https://local-admin-base.utools.club/api/base/grade_no
  @Post('grade_no')
  sendGradeJson() {
    console.log('grade_no');
    // return {
    //   "pageCount": 1,
    //   "total": 15,
    //   "code": "RES_00001",
    //   "data": {
    //     "result": [
    //       {"graName":"优等品update","wmsAccount":"7","graId":"1"},
    //       {"graName":"合格品update","wmsAccount":"7","graId":"2"},
    //       {"graName":"一级品","wmsAccount":"7","graId":"3"},
    //     ]
    //   },
    //   "success": true,
    //   "pageSize": 10,
    //   "message": "请求成功",
    //   "pageNum": 1
    // }
    
    return {
      "pageCount": null,
      "total": null,
      "code": "RES_00007",
      "data": null,
      "success": false,
      "pageSize": null,
      "message": "error",
      "pageNum": null
    }
  }

  // 产地
  // https://local-admin-base.utools.club/api/base/origin_no
  @Post('origin_no')
  sendOriginJson() {
    console.log('origin_no');
    return {
      "pageCount": 1,
      "total": 15,
      "code": "RES_00001",
      "data": {
        "result": [
          {"manName":"延长update","wmsAccount":"7","manId":"1"},
          {"manName":"青州update","wmsAccount":"7","manId":"2"},
          {"manName":"武汉","wmsAccount":"7","manId":"3"},
          {"manName":"北京","wmsAccount":"7","manId":"4"},
        ]
      },
      "success": true,
      "pageSize": 10,
      "message": "请求成功",
      "pageNum": 1
    }
  }

  // 包装方式
    // https://local-admin-base.utools.club/api/base/packspec_no
  
  @Post('packspec_no')
  sendPackspecJson() {
    console.log('packspec_no');
    // return {
    //   "pageCount": 1,
    //   "total": 15,
    //   "code": "RES_00001",
    //   "data": {
    //     "result": [
    //       {"pacName":"纸袋80kgUpdate","wmsAccount":"7","pacId":"1"},
    //       {"pacName":"纸袋81kgUpdate","wmsAccount":"7","pacId":"2"},
    //       {"pacName":"纸袋82kgUpdate","wmsAccount":"7","pacId":"3"},
    //       {"pacName":"纸袋83kgUpdate","wmsAccount":"7","pacId":"4"},
    //       {"pacName":"纸袋84kg","wmsAccount":"7","pacId":"5"},
    //     ]
    //   },
    //   "success": true,
    //   "pageSize": 10,
    //   "message": "请求成功",
    //   "pageNum": 1
    // }

    
    // return {
    //   "pageCount": null,
    //   "total": null,
    //   "code": "RES_00007",
    //   "data": null,
    //   "success": false,
    //   "pageSize": null,
    //   "message": "error",
    //   "pageNum": null
    // }

  }

}
