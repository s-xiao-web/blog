import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage  } from 'multer';
import * as day from 'dayjs';
import * as nuid from 'nuid';

import * as path from 'path';

import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: `static/images/${day().format('YYYY-MM-DD')}`,
        filename: (req, file, cb) => {
          const fieldname = `${nuid.next()}.${file.mimetype.split('/')[1]}`;
          cb(null, fieldname);
        }
      })
    })
  ],
  providers: [UploadService],
  controllers: [UploadController]
})
export class UploadModule {};
