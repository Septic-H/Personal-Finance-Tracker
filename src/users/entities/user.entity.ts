import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Transaction } from 'src/transactions/entities/transaction.entity';

@Schema({ timestamps: true })
@ObjectType()
export class User {
  @Field(() => ID)
  _id: mongoose.Schema.Types.ObjectId;

  @Field()
  @Prop({ required: true, unique: true })
  username: string;

  @Field()
  @Prop({ required: true, unique: true })
  email: string;

  @Field()
  @Prop({ required: true })
  password: string;

  @Field()
  @Prop({ required: true })
  balance: number;

  @Field(() => [Transaction], { nullable: 'itemsAndList' })
  // @Prop({
  //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
  // })
  sentTransactions?: mongoose.Schema.Types.ObjectId[];

  @Field(() => [Transaction], { nullable: 'itemsAndList' })
  // @Prop({
  //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
  // })
  receivedTransactions?: mongoose.Schema.Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
