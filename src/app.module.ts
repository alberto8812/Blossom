import { Module } from '@nestjs/common';
import { join } from 'path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

import { CharacterModule } from './character/character.module';
import { DatabaseModule } from './db/database.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { OriginModule } from './origin/origin.module';



@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault()
      ]
    }),
    DatabaseModule,
    CharacterModule,
    OriginModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

