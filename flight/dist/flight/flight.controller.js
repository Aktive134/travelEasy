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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightController = void 0;
const common_1 = require("@nestjs/common");
const flight_service_1 = require("./flight.service");
const microservices_1 = require("@nestjs/microservices");
let FlightController = class FlightController {
    constructor(FlightService, client) {
        this.FlightService = FlightService;
        this.client = client;
    }
    async all() {
        this.client.emit('hello', 'This is from flight service RabbitMQ');
        return this.FlightService.all();
    }
};
exports.FlightController = FlightController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "all", null);
exports.FlightController = FlightController = __decorate([
    (0, common_1.Controller)('flights'),
    __param(1, (0, common_1.Inject)('FLIGHT_SERVICE')),
    __metadata("design:paramtypes", [flight_service_1.FlightService,
        microservices_1.ClientProxy])
], FlightController);
//# sourceMappingURL=flight.controller.js.map