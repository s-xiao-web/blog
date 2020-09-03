import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Label } from '../../models/label.model'
import { LabelService } from './label.service';
import { LabelController } from './label.controller'

@Module({
  imports: [SequelizeModule.forFeature([Label])],
  providers: [LabelService],
  controllers: [LabelController]
})

export class LabelModule {};
