import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTransactionInput {
  @Field()
  sender: string;

  @Field()
  receiver: string;

  @Field()
  amount: number;

  @Field()
  description?: string;
}
