import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver } from '@nestjs/apollo';

@Module({
  imports: [
    UsersModule,
    TransactionsModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27017/personal-finance-tracker',
    ),
    GraphQLModule.forRoot({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      sortSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
