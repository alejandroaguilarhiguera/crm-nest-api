import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { UsersService } from '@/users/users.service';
import { User } from '@/types';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getAll(): User[] {
      return this.userService.getAll();
    }
}
