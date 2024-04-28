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
export type FlightBookingDocument = FlightBooking & Document;
export declare class FlightBooking {
    id: number;
    user_id: number;
    date: string;
    departure_time: string;
    arrival_time: string;
    price: string;
    status: string;
}
export declare const FlightBookingSchema: import("mongoose").Schema<FlightBooking, import("mongoose").Model<FlightBooking, any, any, any, Document<unknown, any, FlightBooking> & FlightBooking & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FlightBooking, Document<unknown, {}, import("mongoose").FlatRecord<FlightBooking>> & import("mongoose").FlatRecord<FlightBooking> & {
    _id: import("mongoose").Types.ObjectId;
}>;
