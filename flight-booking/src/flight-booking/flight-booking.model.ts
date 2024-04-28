import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FlightBookingDocument = FlightBooking & Document;

@Schema()
export class FlightBooking {
    @Prop()
    id: number;

    @Prop()
    user_id: number;

    @Prop()
    date: string;
    
    @Prop()
    departure_time: string;
    
    @Prop()
    arrival_time: string;
    
    @Prop()
    price: number;

    @Prop({ default: 'pending' })
    status: string;
}

export const FlightBookingSchema = SchemaFactory.createForClass(FlightBooking);
