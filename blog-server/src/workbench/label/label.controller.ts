import { Controller, Body, Get, Post,  } from '@nestjs/common';

import { LabelService }  from './label.service';
import { CreateLabelDto } from './dto/label.dto';


@Controller('label')
export class LabelController {

  constructor(private readonly labelService: LabelService){}

  @Get('getLabel')
  getMenus() {
    return this.labelService.getLabel();
  }

  @Post('addLabel')
  addMenu(@Body() createUserDto: CreateLabelDto ) {
    const result = this.labelService.addLabel(createUserDto);
    return result
  }

  @Post('deleteLabel')
  deleteLable(@Body() { id }) {
    return this.labelService.deleteLabel(id);
  }


}
