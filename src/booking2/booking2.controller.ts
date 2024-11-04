import { Controller, ParseIntPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Booking2Service } from './booking2.service';
import { CreateBooking2Dto } from './dto/create-booking2.dto';
import { UpdateBooking2Dto } from './dto/update-booking2.dto';

@Controller()
export class Booking2Controller {
  constructor(private readonly booking2Service: Booking2Service) {}

  @MessagePattern({cmd:'createBooking2'})
  create(@Payload() createBooking2Dto: CreateBooking2Dto) {
    return this.booking2Service.create(createBooking2Dto);
  }

  @MessagePattern({cmd:'findAllBooking2'})
  findAll() {
    return this.booking2Service.findAll();
  }

  @MessagePattern({cmd:'findOneBooking2'})
  findOne(@Payload('id',ParseIntPipe) id: string) {
    return this.booking2Service.findOne(+id);
  }

  @MessagePattern({cmd:'updateBooking2'})
  update(@Payload() updateBooking2Dto: UpdateBooking2Dto) {
    return this.booking2Service.update(updateBooking2Dto.id, updateBooking2Dto);
  }

  @MessagePattern({cmd:'removeBooking2'})
  remove(@Payload('id',ParseIntPipe) id: string) {
    return this.booking2Service.remove(+id);
  }
}
