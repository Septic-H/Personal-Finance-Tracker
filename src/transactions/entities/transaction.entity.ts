import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/users/entities/user.entity';

@Schema({ timestamps: true })
@ObjectType()
export class Transaction {
  @Field(() => ID)
  _id: mongoose.Schema.Types.ObjectId;

  @Field(() => User)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  sender: mongoose.Schema.Types.ObjectId;

  @Field(() => User)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  receiver: mongoose.Schema.Types.ObjectId;

  @Field()
  @Prop({ required: true })
  amount: number;

  @Field({ nullable: true })
  @Prop()
  description?: string;

  @Field()
  @Prop({ default: Date.now })
  date: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
