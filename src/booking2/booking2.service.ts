import { Injectable } from '@nestjs/common';
import { CreateBooking2Dto } from './dto/create-booking2.dto';
import { UpdateBooking2Dto } from './dto/update-booking2.dto';
import { Booking2 } from './entities/booking2.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class Booking2Service {
  constructor(
     @InjectRepository(Booking2)
     private readonly booking2Repository: Repository<Booking2>,
  ) {}

  async create(createBooking2Dto: CreateBooking2Dto): Promise<Booking2> {
    const booking2 = this.booking2Repository.create(createBooking2Dto);
    return this.booking2Repository.save(booking2);
  }

  async findAll(): Promise<Booking2[]> {
    return this.booking2Repository.find();
  }

  async findOne(id: number): Promise<Booking2> {
    return this.booking2Repository.findOne({where: {id}});
  }

  async update(id: number, updateBooking2Dto: UpdateBooking2Dto): Promise<Booking2> {
    await this.booking2Repository.update(id, updateBooking2Dto);
    return this.booking2Repository.findOne({where: { id}});
  }

  async remove(id: number): Promise<void> {
    await this.booking2Repository.delete(id);
  }
}
