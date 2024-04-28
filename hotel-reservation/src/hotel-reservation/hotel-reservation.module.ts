import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelReservationSchema } from './hotel-reservation.model';
import { HotelReservationController } from './hotel-reservation.controller';
import { HotelReservationService } from './hotel-reservation.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'HotelReservation', schema: HotelReservationSchema}])
  ],
  controllers: [HotelReservationController],
  providers: [HotelReservationService]
})
export class HotelReservationModule {}

