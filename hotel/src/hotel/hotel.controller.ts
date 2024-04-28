import { Controller, Get } from '@nestjs/common';

@Controller('hotels')
export class HotelController {
    @Get()

    all(){
        return 'this returns all hotels';
    }
}
