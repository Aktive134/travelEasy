import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FlightBookingDocument } from './flight-booking.model';
import { Model } from 'mongoose';

@Injectable()
export class FlightBookingService {
    constructor(@InjectModel('FlightBooking') private readonly flightBookingModel: Model<FlightBookingDocument>) {

    }
}
