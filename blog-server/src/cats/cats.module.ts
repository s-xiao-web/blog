import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

import { AppController } from '../app.controller'
import { AppService } from '../app.service'

@Module({
  controllers: [CatsController ],
  providers: [CatsService, AppService ],
})
export class CatsModule {};