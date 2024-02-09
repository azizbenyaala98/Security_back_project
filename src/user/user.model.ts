// src/user/user.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  position: string;

  @Prop()
  grade: string;

  @Prop()
  password: string; // This should be hashed

  @Prop()
  publicKey: string;

  @Prop()
  privateKey: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
