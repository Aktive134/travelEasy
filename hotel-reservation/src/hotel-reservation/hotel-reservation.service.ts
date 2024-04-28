import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HotelReservationDocument } from './hotel-reservation.model';
import { Model } from 'mongoose';

@Injectable()
export class HotelReservationService {
    constructor(@InjectModel('HotelReservation') private readonly hotelReservationModel: Model<HotelReservationDocument>) {

    }
}


