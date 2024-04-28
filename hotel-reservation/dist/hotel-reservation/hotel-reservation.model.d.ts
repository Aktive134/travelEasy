/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export type HotelReservationDocument = HotelReservation & Document;
export declare class HotelReservation {
    id: number;
    user_id: number;
    hotel_id: number;
    check_in_date: string;
    check_out_date: string;
    price: number;
    status: string;
}
export declare const HotelReservationSchema: import("mongoose").Schema<HotelReservation, import("mongoose").Model<HotelReservation, any, any, any, Document<unknown, any, HotelReservation> & HotelReservation & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HotelReservation, Document<unknown, {}, import("mongoose").FlatRecord<HotelReservation>> & import("mongoose").FlatRecord<HotelReservation> & {
    _id: import("mongoose").Types.ObjectId;
}>;
