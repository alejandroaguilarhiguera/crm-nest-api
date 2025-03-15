import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

interface User {
    id: number;
    name: string;
}

@Injectable()
export class UsersService {
    getAll(): User[] {
        return Array(100).fill(null).map((_,index) => ({
            id: index+1,
            name: faker.person.fullName()
        }))
      }
}
