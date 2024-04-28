"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightModule = void 0;
const common_1 = require("@nestjs/common");
const flight_controller_1 = require("./flight.controller");
const mongoose_1 = require("@nestjs/mongoose");
const flight_model_1 = require("./flight.model");
const flight_service_1 = require("./flight.service");
const microservices_1 = require("@nestjs/microservices");
let FlightModule = class FlightModule {
};
exports.FlightModule = FlightModule;
exports.FlightModule = FlightModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Flight', schema: flight_model_1.FlightSchema }]),
            microservices_1.ClientsModule.register([
                {
                    name: 'FLIGHT_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqps://kddurojm:nqhPv2jn1py1xsCD_r54MN0P98yhEK3Q@octopus.rmq3.cloudamqp.com/kddurojm'],
                        queue: 'flight_queue',
                        queueOptions: {
                            durable: false
                        },
                    },
                },
            ]),
        ],
        controllers: [flight_controller_1.FlightController],
        providers: [flight_service_1.FlightService]
    })
], FlightModule);
//# sourceMappingURL=flight.module.js.map