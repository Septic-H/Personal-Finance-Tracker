import { Injectable } from '@nestjs/common';
import { CreateTransactionInput } from './dto/create-transaction.input';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction } from './entities/transaction.entity';
import { Model } from 'mongoose';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<Transaction>,
  ) {}

  async create(createTransactionInput: CreateTransactionInput) {
    const createdTransaction = new this.transactionModel(
      createTransactionInput,
    );
    return createdTransaction.save();
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactionModel.find();
  }

  async findOne(id: string): Promise<Transaction | null> {
    return this.transactionModel.findOne({ _id: id });
  }

  async forSender(senderId: string): Promise<Transaction[]> {
    return this.transactionModel.find({ sender: senderId });
  }

  async forReceiver(receiverId: string): Promise<Transaction[]> {
    return this.transactionModel.find({ receiver: receiverId });
  }
}
