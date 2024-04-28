import { Controller, Get } from '@nestjs/common';

@Controller('hotel-reservations')
export class HotelReservationController {
    @Get()
    all () {
        return 'all hotel reservations here';
    }
}
