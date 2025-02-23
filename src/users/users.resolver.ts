/* eslint-disable @typescript-eslint/no-base-to-string */
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { TransactionsService } from 'src/transactions/transactions.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly transactionsService: TransactionsService,
  ) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => String }) id: string) {
    return this.usersService.remove(id);
  }

  @ResolveField(() => [Transaction])
  sentTransactions(@Parent() user: User) {
    return this.transactionsService.forSender(user._id.toString());
  }

  @ResolveField(() => [Transaction])
  receivedTransactions(@Parent() user: User) {
    return this.transactionsService.forReceiver(user._id.toString());
  }
}
