import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor  } from '@nestjs/platform-express';


@Controller('upload')
export class UploadController {

  @Post('image')
  @UseInterceptors(FileInterceptor('cover'))
  async UploadedFile(@UploadedFile() file) {
    return {...file, path: file.path.replace(/\\/g,"/")};
  }

}

