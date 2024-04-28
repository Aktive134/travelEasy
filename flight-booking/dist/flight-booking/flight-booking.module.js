"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightBookingModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const flight_booking_model_1 = require("./flight-booking.model");
const flight_booking_controller_1 = require("./flight-booking.controller");
const flight_booking_service_1 = require("./flight-booking.service");
let FlightBookingModule = class FlightBookingModule {
};
exports.FlightBookingModule = FlightBookingModule;
exports.FlightBookingModule = FlightBookingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'FlightBooking', schema: flight_booking_model_1.FlightBookingSchema }])
        ],
        controllers: [flight_booking_controller_1.FlightBookingController],
        providers: [flight_booking_service_1.FlightBookingService]
    })
], FlightBookingModule);
//# sourceMappingURL=flight-booking.module.js.map