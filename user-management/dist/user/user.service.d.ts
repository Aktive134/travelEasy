import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    all(): Promise<User[]>;
    create(data: any): Promise<User>;
    get(id: number): Promise<User>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}
