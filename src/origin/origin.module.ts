import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/database.module';
import { OriginResolver } from './infrastructare/origin.resolver';
import { OriginService } from './aplication/origin-use-case.service';
import { OriginRepository } from './domain/repository/origin.repository';


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
