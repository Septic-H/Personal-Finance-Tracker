/* eslint-disable @typescript-eslint/no-base-to-string */
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { TransactionsService } from './transactions.service';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionInput } from './dto/create-transaction.input';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Resolver(() => Transaction)
export class TransactionsResolver {
  constructor(
    private readonly transactionsService: TransactionsService,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => Transaction)
  createTransaction(
    @Args('createTransactionInput')
    createTransactionInput: CreateTransactionInput,
  ) {
    return this.transactionsService.create(createTransactionInput);
  }

  @Query(() => [Transaction], { name: 'transactions' })
  findAll() {
    return this.transactionsService.findAll();
  }

  @Query(() => Transaction, { name: 'transaction' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.transactionsService.findOne(id);
  }

  @ResolveField(() => User)
  sender(@Parent() transaction: Transaction) {
    return this.usersService.findOne(transaction.sender.toString());
  }

  @ResolveField(() => User)
  receiver(@Parent() transaction: Transaction) {
    return this.usersService.findOne(transaction.receiver.toString());
  }
}
