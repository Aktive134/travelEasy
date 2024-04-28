import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HotelReservationDocument = HotelReservation & Document;

@Schema()
export class HotelReservation {
    @Prop()
    id: number;

    @Prop()
    user_id: number;

    @Prop()
    hotel_id: number;
    
    @Prop()
    check_in_date: string;
    
    @Prop()
    check_out_date: string;
    
    @Prop()
    price: number;

    @Prop({ default: 'available' })
    status: string;
}

export const HotelReservationSchema = SchemaFactory.createForClass(HotelReservation);