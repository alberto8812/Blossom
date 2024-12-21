import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CharacterModule } from './character/character.module';
import { join } from 'path';
import { DatabaseModule } from './shared/db/database.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    DatabaseModule,
    CharacterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
