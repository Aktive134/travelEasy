import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FlightDocument } from './flight.model';
import { Model } from 'mongoose';

@Injectable()
export class FlightService {
    constructor (@InjectModel('Flight') private readonly flightModel: Model<FlightDocument>) {}

    async all(){
        return this.flightModel.find().exec();
    }

}
