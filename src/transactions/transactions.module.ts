import { forwardRef, Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsResolver } from './transactions.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionSchema } from './entities/transaction.entity';
import { UsersResolver } from 'src/users/users.resolver';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Transaction', schema: TransactionSchema },
    ]),
    forwardRef(() => UsersModule),
  ],
  exports: [TransactionsService],
  providers: [TransactionsResolver, TransactionsService, UsersResolver],
})
export class TransactionsModule {}
