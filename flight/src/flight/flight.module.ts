import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FlightSchema } from './flight.model';
import { FlightService } from './flight.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Flight', schema: FlightSchema}]),
    ClientsModule.register([
      {
        name: 'FLIGHT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://kddurojm:nqhPv2jn1py1xsCD_r54MN0P98yhEK3Q@octopus.rmq3.cloudamqp.com/kddurojm'],
          queue: 'flight_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [FlightController],
  providers: [FlightService]
})
export class FlightModule {}
