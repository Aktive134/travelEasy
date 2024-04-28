import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HotelDocument = Hotel & Document;

@Schema()
export class Hotel {
    @Prop()
    id: number;

    @Prop()
    name: string;

    @Prop()
    location: string;
    
    @Prop()
    check_in_date: string;
    
    @Prop()
    check_out_date: string;
    
    @Prop()
    price: number;

    @Prop()
    available_rooms: number;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
