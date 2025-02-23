import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { DeleteResult, Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserInput: CreateUserInput) {
    const createdUser = new this.userModel(createUserInput);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findOne(id: string): Promise<User | null> {
    return this.userModel.findOne({ _id: id });
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.userModel.deleteOne({ _id: id });
  }
}
