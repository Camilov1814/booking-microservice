import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Booking2Module } from './booking2/booking2.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking2 } from './booking2/entities/booking2.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Booking2],
      synchronize: true,  // Solo en desarrollo, crea las tablas automáticamente
    }),
    Booking2Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
