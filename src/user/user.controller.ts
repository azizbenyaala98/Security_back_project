// src/user/user.controller.ts

import { Controller, Post, Body, ValidationPipe, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user.model'; // 

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body(ValidationPipe) createUserDto: any): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string): Promise<any> {
    // This route will be protected by the 'local' strategy
    return { message: 'Login successful' };
  }
}
