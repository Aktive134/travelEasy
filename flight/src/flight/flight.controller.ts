import { Controller, Get, Inject } from '@nestjs/common';
import { FlightService } from './flight.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('flights')
export class FlightController {
    constructor(
        private FlightService: FlightService,
        @Inject('FLIGHT_SERVICE') private readonly client: ClientProxy
    ){}
    @Get()
    async all(){
        this.client.emit('hello', 'This is from flight service RabbitMQ');
        return this.FlightService.all();
    }
}
