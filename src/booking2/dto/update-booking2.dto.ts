import { PartialType } from '@nestjs/mapped-types';
import { CreateBooking2Dto } from './create-booking2.dto';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdateBooking2Dto extends PartialType(CreateBooking2Dto) {
  @IsNumber()
  @IsPositive()
  id?: number;

  eventName?: string;
  eventDate?: Date;
  guestName?: string;
  guestEmail?: string;
  guestCount?: number;
  specialRequests?: string;
  
}
