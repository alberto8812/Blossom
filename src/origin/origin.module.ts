import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/database.module';
import { OriginResolver } from './infrastructare/origin.resolver';


@Module({
  imports: [
    DatabaseModule
  ],
  providers: [
    OriginResolver
    , OriginService
    , OriginRepository
  ],

})
export class OriginModule { }
