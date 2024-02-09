// src/auth/auth.service.ts

import { Injectable, Logger } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    try {
      const user = await this.userService.validateUser(email, password);

      if (!user) {
        throw new Error('User not found');
      }

      this.logger.log(`User found: ${user.email}`);
      return user;
    } catch (error) {
      this.logger.error(`Validation error: ${error.message}`);
      return null;
    }
  }
}
