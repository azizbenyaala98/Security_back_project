import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://azizbenyaala:azizbenyaala1998@securityproject.ilvna4a.mongodb.net/"),
  UserModule,
  AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
