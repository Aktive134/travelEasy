import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FlightBookingSchema } from './flight-booking.model';
import { FlightBookingController } from './flight-booking.controller';
import { FlightBookingService } from './flight-booking.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'FlightBooking', schema: FlightBookingSchema}])
  ],
  controllers: [FlightBookingController],
  providers: [FlightBookingService]
})
export class FlightBookingModule {}
