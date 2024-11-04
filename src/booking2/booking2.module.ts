import { Module } from '@nestjs/common';
import { Booking2Service } from './booking2.service';
import { Booking2Controller } from './booking2.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking2 } from './entities/booking2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Booking2])],
  controllers: [Booking2Controller],
  providers: [Booking2Service],
})
export class Booking2Module {}
