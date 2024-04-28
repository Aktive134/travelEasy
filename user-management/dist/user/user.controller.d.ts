import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    all(): Promise<import("./user.entity").User[]>;
    create(name: string, email: string, password: string, contactInfo: string): Promise<import("./user.entity").User>;
    get(id: number): Promise<import("./user.entity").User>;
    update(id: number, name: string, email: string, password: string, contactInfo: string): Promise<any>;
    delete(id: number): Promise<any>;
    hello(data: string): Promise<void>;
}
