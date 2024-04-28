"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelReservationSchema = exports.HotelReservation = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let HotelReservation = class HotelReservation {
};
exports.HotelReservation = HotelReservation;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HotelReservation.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HotelReservation.prototype, "user_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HotelReservation.prototype, "hotel_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], HotelReservation.prototype, "check_in_date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], HotelReservation.prototype, "check_out_date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HotelReservation.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'available' }),
    __metadata("design:type", String)
], HotelReservation.prototype, "status", void 0);
exports.HotelReservation = HotelReservation = __decorate([
    (0, mongoose_1.Schema)()
], HotelReservation);
exports.HotelReservationSchema = mongoose_1.SchemaFactory.createForClass(HotelReservation);
//# sourceMappingURL=hotel-reservation.model.js.map