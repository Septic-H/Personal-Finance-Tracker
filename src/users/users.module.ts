import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { TransactionsResolver } from 'src/transactions/transactions.resolver';
import { TransactionsModule } from 'src/transactions/transactions.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    forwardRef(() => TransactionsModule),
  ],
  exports: [UsersService],
  providers: [UsersResolver, UsersService, TransactionsResolver],
})
export class UsersModule {}
