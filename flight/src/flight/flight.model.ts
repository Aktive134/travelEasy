import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FlightDocument = Flight & Document;

@Schema()
export class Flight {
    @Prop()
    id: number;

    @Prop()
    airline: string;

    @Prop()
    departure_airport: string;
    
    @Prop()
    arrival_airport: string;
    
    @Prop()
    departure_time: string;
    
    @Prop()
    arrival_time: string;
    
    @Prop()
    price: string;

    @Prop()
    available_seat: string;
}

export const FlightSchema = SchemaFactory.createForClass(Flight);