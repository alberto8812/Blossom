import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/database.module';


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
