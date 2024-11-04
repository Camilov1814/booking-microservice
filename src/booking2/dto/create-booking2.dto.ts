import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateBooking2Dto {

    @ApiProperty({example: 'Wedding', description: 'The name of the event'})
    @IsString()
    eventName: string;

    @ApiProperty({example: '2021-09-01', description: 'The date of the event'})
    @IsDate()
    eventDate: Date;

    @ApiProperty({example: 'John Doe', description: 'The name of the guest'})
    @IsString()
    guestName: string;

    @ApiProperty({example: 'jhondoe@gmail.com', description: 'The email of the guest'})
    @IsString()
    guestEmail: string;

    @ApiProperty({example: 3, description: 'The number of guests'})
    @IsNumber()
    guestCount: number;

    @ApiProperty({example: 'Special requests', description: 'Any special requests for the event'})
    @IsString()
    specialRequests: string;


}
