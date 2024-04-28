import { Controller, Get } from '@nestjs/common';

@Controller('flight-bookings')
export class FlightBookingController {
    @Get()
    all(){
        return 'all flights available';
    }
}
