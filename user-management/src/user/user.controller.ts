import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { EventPattern } from '@nestjs/microservices';


@Controller('users')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    async all() {
        return this.userService.all();
    }

    @Post()
    async create(
        @Body('name')  name: string,
        @Body('email') email: string,
        @Body('password')  password: string,
        @Body('contactInfo')  contactInfo: string,
    ) {
        return this.userService.create({
            name, email, password, contactInfo
        })
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.userService.get(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body('name')  name: string,
        @Body('email') email: string,
        @Body('password')  password: string,
        @Body('contactInfo')  contactInfo: string,
    ) {
        return this.userService.update(id, {
            name, email, password, contactInfo
        })
    }

    @Delete(':id')
    async delete(@Param('id') id: number){
        return this.userService.delete(id);
    }

    @EventPattern('hello')
    async hello(data: string){
        console.log(data);
    }

}