import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HotelDocument } from './hotel.model';
import { Model } from 'mongoose';

@Injectable()
export class HotelService {
    constructor(@InjectModel('Hotel') private readonly hotelModel: Model<HotelDocument>) {

    }
}
