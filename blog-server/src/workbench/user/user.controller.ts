import { Controller, Post, Body, Get } from '@nestjs/common';

import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

import { AuthService } from '../logical/auth.service'

@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) { }

  @Post('login')
  userLogin(@Body() params: UserDto) {
    return this.userService.userLogin(params);
  }

  @Post('findUser')
  userFinde(@Body() params: UserDto) {
    const { username, password } = params
    this.authService.validateUser(username, password)
  }


  // https://local-admin-base.utools.club/api/base/sku
  @Post('sku')
  sendBaseSku() {
    console.log('sku');

    return {
      "pageCount": 1,
      "total": 2,
      "code": "RES_00001",
      "data": {
        "result": "[{\"skuName\": \"聚丙烯/IIR-1675/1260KG/入库详单号:AAA1\", \"wmsAccount\": \"1\", \"skuId\": \"1311\", \"productDesc\": \"[{\\\"attrId\\\": \\\"001\\\",\\\"attrName\\\": \\\"品名\\\",\\\"attrValue\\\": \\\"聚丙烯\\\"},{\\\"attrId\\\": \\\"002\\\",\\\"attrName\\\": \\\"牌号\\\",\\\"attrValue\\\": \\\"BBB\\\"},{\\\"attrId\\\": \\\"003\\\",\\\"attrName\\\": \\\"产地\\\",\\\"attrValue\\\": \\\"CCC\\\"},{\\\"attrId\\\": \\\"004\\\",\\\"attrName\\\": \\\"等级\\\",\\\"attrValue\\\": \\\"CCC\\\"},{\\\"attrId\\\": \\\"005\\\",\\\"attrName\\\": \\\"包装\\\",\\\"attrValue\\\": \\\"CCC\\\"}]\",\"specialDesc\":\"[{\\\"attrId\\\":\\\"001\\\",\\\"attrValue\\\":\\\"入库详单号\\\",\\\"attrName\\\":\\\"标记类型\\\"},{\\\"attrId\\\":\\\"002\\\",\\\"attrValue\\\":\\\"87873\\\",\\\"attrName\\\":\\\"标记号\\\"}]\",\"otherDesc\":\"[{\\\"attrId\\\":\\\"001\\\",\\\"attrValue\\\":\\\"\\\",\\\"attrName\\\":\\\"海运提单号\\\"},{\\\"attrId\\\":\\\"002\\\",\\\"attrValue\\\":\\\"\\\",\\\"attrName\\\":\\\"清单号\\\"},{\\\"attrId\\\":\\\"003\\\",\\\"attrValue\\\":\\\"\\\",\\\"attrName\\\":\\\"仓储编号\\\"},{\\\"attrId\\\":\\\"004\\\",\\\"attrValue\\\":\\\"\\\",\\\"attrName\\\":\\\"贸易方式\\\"},{\\\"attrId\\\":\\\"005\\\",\\\"attrValue\\\":\\\"\\\",\\\"attrName\\\":\\\"包装方式\\\"},{\\\"attrId\\\":\\\"006\\\",\\\"attrValue\\\":\\\"\\\",\\\"attrName\\\":\\\"车型\\\"},{\\\"attrId\\\":\\\"007\\\",\\\"attrValue\\\":\\\"\\\",\\\"attrName\\\":\\\"箱量\\\"}]\"},{\"skuName\": \"聚丙烯/IIR-1675/1260KG/入库详单号:BBB222\", \"wmsAccount\": \"1\", \"skuId\": \"1221\", \"productDesc\": \"[{\\\"attrId\\\": \\\"001\\\",\\\"attrName\\\": \\\"品名\\\",\\\"attrValue\\\": \\\"聚丙烯\\\"},{\\\"attrId\\\": \\\"002\\\",\\\"attrName\\\": \\\"牌号\\\",\\\"attrValue\\\": \\\"BBB\\\"},{\\\"attrId\\\": \\\"003\\\",\\\"attrName\\\": \\\"产地\\\",\\\"attrValue\\\": \\\"CCC\\\"},{\\\"attrId\\\": \\\"004\\\",\\\"attrName\\\": \\\"等级\\\",\\\"attrValue\\\": \\\"CCC\\\"},{\\\"attrId\\\": \\\"005\\\",\\\"attrName\\\": \\\"包装\\\",\\\"attrValue\\\": \\\"CCC\\\"}]\",\"specialDesc\":\"[{\\\"attrId\\\":\\\"001\\\",\\\"attrValue\\\":\\\"入库详单号\\\",\\\"attrName\\\":\\\"标记类型\\\"},{\\\"attrId\\\":\\\"002\\\",\\\"attrValue\\\":\\\"87873\\\",\\\"attrName\\\":\\\"标记号\\\"}]\",\"otherDesc\":\"[{\\\"attrId\\\":\\\"001\\\",\\\"attrValue\\\":\\\"\\\",\\\"attrName\\\":\\\"海运提单号\\\"},{\\\"attrId\\\":\\\"002\\\",\\\"attrValue\\\":\\\"\\\",\\\"attrName\\\":\\\"清单号\\\"},{\\\"attrId\\\":\\\"003\\\",\\\"attrValue\\\":\\\"\\\",\\\"attrName\\\":\\\"仓储编号\\\"},{\\\"attrId\\\":\\\"004\\\",\\\"attrValue\\\":\\\"\\\",\\\"attrName\\\":\\\"贸易方式\\\"},{\\\"attrId\\\":\\\"005\\\",\\\"attrValue\\\":\\\"\\\",\\\"attrName\\\":\\\"包装方式\\\"},{\\\"attrId\\\":\\\"006\\\",\\\"attrValue\\\":\\\"\\\",\\\"attrName\\\":\\\"车型\\\"},{\\\"attrId\\\":\\\"007\\\",\\\"attrValue\\\":\\\"\\\",\\\"attrName\\\":\\\"箱量\\\"}]\"}]"
      },
      "success": true,
      "pageSize": 10,
      "message": "请求成功",
      "pageNum": 1
    }

    // return {
    //   "pageCount": 1,
    //   "total": 2,
    //   "code": "RES_00001",
    //   "data": {
    //     "result": [
    //       {
    //         "skuName": "聚丙烯/IIR-1675/1260KG/入库详单号:77777",
    //         "wmsAccount": "1",
    //         "skuId": "1311",
    //         "productDesc": [
    //           { "attrId": "001", "attrName": "品名", "attrValue": "聚丙烯" },
    //           { "attrId": "002", "attrName": "牌号", "attrValue": "one update" },
    //           { "attrId": "003", "attrName": "产地", "attrValue": "one update" },
    //           { "attrId": "004", "attrName": "等级", "attrValue": "one update" },
    //           { "attrId": "005", "attrName": "包装", "attrValue": "one update" }
    //         ],
    //         "specialDesc": [
    //           { "attrId": "001", "attrValue": "入库详单号", "attrName": "标记类型" }, 
    //           { "attrId": "002", "attrValue": "87873", "attrName": "标记号" }
    //         ],
    //         "otherDesc": [
    //           { "attrId": "001", "attrValue": "", "attrName": "海运提单号" },
    //           { "attrId": "002", "attrValue": "", "attrName": "清单号" },
    //           { "attrId": "003", "attrValue": "", "attrName": "仓储编号" },
    //           { "attrId": "004", "attrValue": "", "attrName": "贸易方式" },
    //           { "attrId": "005", "attrValue": "", "attrName": "包装方式" },
    //           { "attrId": "006", "attrValue": "", "attrName": "车型" },
    //           { "attrId": "007", "attrValue": "", "attrName": "箱量" }
    //         ]
    //       },
    //       {
    //         "skuName": "聚丙烯/IIR-1675/1260KG/入库详单号:88888",
    //         "wmsAccount": "1",
    //         "skuId": "1221",
    //         "productDesc": [
    //           { "attrId": "001", "attrName": "品名", "attrValue": "聚丙烯" }, 
    //           { "attrId": "002", "attrName": "牌号", "attrValue": "two update" },
    //           { "attrId": "004", "attrName": "等级", "attrValue": "two" }, 
    //           { "attrId": "005", "attrName": "包装", "attrValue": "two" }
    //         ],
    //         "specialDesc": [
    //           { "attrId": "001", "attrValue": "入库详单号", "attrName": "标记类型" }, 
    //           { "attrId": "002", "attrValue": "87873", "attrName": "标记号" }
    //         ],
    //         "otherDesc": [
    //           { "attrId": "001", "attrValue": "", "attrName": "海运提单号" }, 
    //           { "attrId": "002", "attrValue": "", "attrName": "清单号" }, 
    //           { "attrId": "003", "attrValue": "", "attrName": "仓储编号" }, 
    //           { "attrId": "004", "attrValue": "", "attrName": "贸易方式" }, 
    //           { "attrId": "005", "attrValue": "", "attrName": "包装方式" }, 
    //           { "attrId": "006", "attrValue": "", "attrName": "车型" }, 
    //           { "attrId": "007", "attrValue": "", "attrName": "箱量" }
    //         ]
    //       },
    //       {
    //         "skuName": "聚丙烯/IIR-1675/1260KG/入库详单号:99999",
    //         "wmsAccount": "1",
    //         "skuId": "1221",
    //         "productDesc": [
    //           { "attrId": "001", "attrName": "品名", "attrValue": "聚丙烯" },
    //           { "attrId": "002", "attrName": "牌号", "attrValue": "add three" },
    //           { "attrId": "003", "attrName": "产地", "attrValue": "add three" },
    //           { "attrId": "004", "attrName": "等级", "attrValue": "add three" },
    //           { "attrId": "005", "attrName": "包装", "attrValue": "add three" }
    //         ],
    //         "specialDesc": [
    //           { "attrId": "001", "attrValue": "入库详单号", "attrName": "标记类型" }, 
    //           { "attrId": "002", "attrValue": "87873", "attrName": "标记号" }
    //         ],
    //         "otherDesc": [
    //           { "attrId": "001", "attrValue": "", "attrName": "海运提单号" },
    //           { "attrId": "002", "attrValue": "", "attrName": "清单号" },
    //           { "attrId": "003", "attrValue": "", "attrName": "仓储编号" },
    //           { "attrId": "004", "attrValue": "", "attrName": "贸易方式" },
    //           { "attrId": "005", "attrValue": "", "attrName": "包装方式" },
    //           { "attrId": "006", "attrValue": "", "attrName": "车型" },
    //           { "attrId": "007", "attrValue": "", "attrName": "箱量" }
    //         ]
    //       },
    //     ]
    //   },
    //   "success": true,
    //   "pageSize": 10,
    //   "message": "请求成功",
    //   "pageNum": 1
    // }

    // return {
    //   "pageCount": 0,
    //   "total": 0,
    //   "code": "RES_00001",
    //   "data": {},
    //   "success": false,
    //   "pageSize": 10,
    //   "message": "请求失败",
    //   "pageNum": 0
    // }

  }

  // https://local-admin-base.utools.club/api/base/
  @Post('good_no')
  sendBaseJson(@Body() params) {
    const { data: { wmsAccount } } = params

    // 品名 json 测试

    if (wmsAccount == 1) {

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

    if (wmsAccount == 5) {
      return {
        "pageCount": 1,
        "total": 15,
        "code": "RES_00001",
        "data": {
          "result": [
            { "gnaName": "聚乙烯555new", "wmsAccount": "5", "gnaid": "1" },
            { "gnaName": "聚丙烯555new", "wmsAccount": "5", "gnaid": "2" },
            { "gnaName": "天然生胶555", "wmsAccount": "5", "gnaid": "3" },
            { "gnaName": "天然生胶5555", "wmsAccount": "5", "gnaid": "3" },
          ]
        },
        "success": true,
        "pageSize": 10,
        "message": "请求成功",
        "pageNum": 1
      }
    }

    if (wmsAccount == 7) {
      return {
        "pageCount": 1,
        "total": 15,
        "code": "RES_00001",
        "data": {
          "result": [
            { "gnaName": "聚乙烯777new", "wmsAccount": "7", "gnaid": "1" },
            { "gnaName": "聚丙烯777new", "wmsAccount": "7", "gnaid": "2" },
            { "gnaName": "天然生胶777", "wmsAccount": "7", "gnaid": "3" },
            { "gnaName": "天然生胶7777", "wmsAccount": "7", "gnaid": "3" },
          ]
        },
        "success": true,
        "pageSize": 10,
        "message": "请求成功",
        "pageNum": 1
      }
    }
  }

  // 排号
  @Post('spec_no')
  sendSpecJson(@Body() params) {
    console.log('spec_no');

    const { data: { wmsAccount } } = params;

    if (wmsAccount == 1) {

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

    if (wmsAccount == 5) {
      return {
        "pageCount": 1,
        "total": 15,
        "code": "RES_00001",
        "data": {
          "result": [
            { "speName": "聚乙烯555new", "wmsAccount": "5", "speId": "1" },
            { "speName": "聚丙烯555new", "wmsAccount": "5", "speId": "2" },
            { "speName": "天然生胶555", "wmsAccount": "5", "speId": "3" },
            { "speName": "天然生胶5555", "wmsAccount": "5", "speId": "3" },
          ]
        },
        "success": true,
        "pageSize": 10,
        "message": "请求成功",
        "pageNum": 1
      }
    }


    if (wmsAccount == 7) {
      return {
        "pageCount": 1,
        "total": 15,
        "code": "RES_00001",
        "data": {
          "result": [
            { "speName": "聚乙烯777new", "wmsAccount": "7", "speId": "1" },
            { "speName": "聚丙烯777new", "wmsAccount": "7", "speId": "2" },
            { "speName": "天然生胶777", "wmsAccount": "7", "speId": "3" },
            { "speName": "天然生胶7777", "wmsAccount": "7", "speId": "4" },
          ]
        },
        "success": true,
        "pageSize": 10,
        "message": "请求成功",
        "pageNum": 1
      }
    }
  }

  // 等级
  // https://local-admin-base.utools.club/api/base/grade_no
  @Post('grade_no')
  sendGradeJson(@Body() params) {
    console.log('grade_no');

    const { data: { wmsAccount } } = params;

    if (wmsAccount == 1) {

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

    if (wmsAccount == 5) {
      return {
        "pageCount": 1,
        "total": 15,
        "code": "RES_00001",
        "data": {
          "result": [
            { "graName": "优等品", "wmsAccount": "5", "graId": "1" },
            { "graName": "合格品", "wmsAccount": "5", "graId": "2" },
            { "graName": "一等品", "wmsAccount": "5", "graId": "3" },
            { "graName": "残次品", "wmsAccount": "5", "graId": "3" },
          ]
        },
        "success": true,
        "pageSize": 10,
        "message": "请求成功",
        "pageNum": 1
      }
    }


    if (wmsAccount == 7) {
      return {
        "pageCount": 1,
        "total": 15,
        "code": "RES_00001",
        "data": {
          "result": [
            { "graName": "优等品", "wmsAccount": "7", "graId": "1" },
            { "graName": "合格品", "wmsAccount": "7", "graId": "2" },
            { "graName": "一等品", "wmsAccount": "7", "graId": "3" },
            { "graName": "残次品", "wmsAccount": "7", "graId": "4" },
          ]
        },
        "success": true,
        "pageSize": 10,
        "message": "请求成功",
        "pageNum": 1
      }
    }
  }

  // 产地
  // https://local-admin-base.utools.club/api/base/origin_no
  @Post('origin_no')
  sendOriginJson(@Body() params) {
    console.log('origin_no');


    const { data: { wmsAccount } } = params;

    if (wmsAccount == 1) {

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

    if (wmsAccount == 5) {
      return {
        "pageCount": 1,
        "total": 15,
        "code": "RES_00001",
        "data": {
          "result": [
            { "manName": "延长update", "wmsAccount": "5", "manId": "1" },
            { "manName": "青州update", "wmsAccount": "5", "manId": "2" },
            { "manName": "武汉", "wmsAccount": "5", "manId": "3" },
            { "manName": "北京", "wmsAccount": "5", "manId": "3" },
          ]
        },
        "success": true,
        "pageSize": 10,
        "message": "请求成功",
        "pageNum": 1
      }
    }


    if (wmsAccount == 7) {
      return {
        "pageCount": 1,
        "total": 15,
        "code": "RES_00001",
        "data": {
          "result": [
            { "manName": "延长update", "wmsAccount": "7", "manId": "1" },
            { "manName": "青州update", "wmsAccount": "7", "manId": "2" },
            { "manName": "武汉", "wmsAccount": "7", "manId": "3" },
            { "manName": "北京", "wmsAccount": "7", "manId": "4" },
          ]
        },
        "success": true,
        "pageSize": 10,
        "message": "请求成功",
        "pageNum": 1
      }
    }

  }

  // 包装方式
  // https://local-admin-base.utools.club/api/base/packspec_no

  @Post('packspec_no')
  sendPackspecJson(@Body() params) {
    console.log('packspec_no');

    const { data: { wmsAccount } } = params;

    if (wmsAccount == 1) {

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

    if (wmsAccount == 5) {
      return {
        "pageCount": 1,
        "total": 15,
        "code": "RES_00001",
        "data": {
          "result": [
            { "pacName": "纸袋80kgUpdate", "wmsAccount": "5", "pacId": "1" },
            { "pacName": "纸袋81kgUpdate", "wmsAccount": "5", "pacId": "2" },
            { "pacName": "纸袋82kgUpdate", "wmsAccount": "5", "pacId": "3" },
            { "pacName": "纸袋83kgUpdate", "wmsAccount": "5", "pacId": "3" },
          ]
        },
        "success": true,
        "pageSize": 10,
        "message": "请求成功",
        "pageNum": 1
      }
    }


    if (wmsAccount == 7) {
      return {
        "pageCount": 1,
        "total": 15,
        "code": "RES_00001",
        "data": {
          "result": [
            { "pacName": "纸袋80kgUpdate", "wmsAccount": "7", "pacId": "1" },
            { "pacName": "纸袋81kgUpdate", "wmsAccount": "7", "pacId": "2" },
            { "pacName": "纸袋82kgUpdate", "wmsAccount": "7", "pacId": "3" },
            { "pacName": "纸袋83kgUpdate", "wmsAccount": "7", "pacId": "4" },
          ]
        },
        "success": true,
        "pageSize": 10,
        "message": "请求成功",
        "pageNum": 1
      }
    }
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
