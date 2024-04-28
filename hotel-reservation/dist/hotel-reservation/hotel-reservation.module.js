"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelReservationModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const hotel_reservation_model_1 = require("./hotel-reservation.model");
const hotel_reservation_controller_1 = require("./hotel-reservation.controller");
const hotel_reservation_service_1 = require("./hotel-reservation.service");
let HotelReservationModule = class HotelReservationModule {
};
exports.HotelReservationModule = HotelReservationModule;
exports.HotelReservationModule = HotelReservationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'HotelReservation', schema: hotel_reservation_model_1.HotelReservationSchema }])
        ],
        controllers: [hotel_reservation_controller_1.HotelReservationController],
        providers: [hotel_reservation_service_1.HotelReservationService]
    })
], HotelReservationModule);
//# sourceMappingURL=hotel-reservation.module.js.map