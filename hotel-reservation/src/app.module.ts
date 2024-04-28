import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelReservationModule } from './hotel-reservation/hotel-reservation.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Aktive134:Slotjob134@cluster0.3fkfyg2.mongodb.net/travelEasy-reservation', {
      autoCreate: true
    }),
    HotelReservationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
