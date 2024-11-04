import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Booking2 {
    @ApiProperty({example: 1, description: 'The unique identifier of the booking'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: 'Wedding', description: 'The name of the event'})
    @Column()
    eventName: string;

    @ApiProperty({example: '2021-09-01', description: 'The date of the event'})
    @Column()
    eventDate: Date;

    @ApiProperty({example: 'John Doe', description: 'The name of the guest'})
    @Column()
    guestName: string;

    @ApiProperty({example: 'jhondoe@gmail.com', description: 'The email of the guest'})
    @Column()
    guestEmail: string;

    @ApiProperty({example: 3, description: 'The number of guests'})
    @Column()
    guestCount: number;


    @ApiProperty({example: 'Special requests', description: 'Any special requests for the event'})
    @Column()
    specialRequests: string;

}


