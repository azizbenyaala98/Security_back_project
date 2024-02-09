// src/auth/local.strategy.ts

import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(LocalStrategy.name);

  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    try {
      const user = await this.authService.validateUser(username, password);

      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }

      this.logger.log(`User authenticated: ${user.email}`);
      return user;
    } catch (error) {
      this.logger.error(`Authentication error: ${error.message}`);
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
