import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightModule } from './flight/flight.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Aktive134:Slotjob134@cluster0.3fkfyg2.mongodb.net/travelEasy-flight', {
      autoCreate: true
    }),
    FlightModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
