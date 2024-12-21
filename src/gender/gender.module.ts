import { Module } from '@nestjs/common';
import { GenderService } from './aplication/gender-use-case.service';
import { GenderResolver } from './infrastructare/gender.resolver';
import { GenderRepository } from './domain/repository/gender.repository';
import { DatabaseModule } from 'src/db/database.module';


@Module({
  imports: [
    DatabaseModule
  ],
  providers: [
    GenderResolver
    , GenderService
    , GenderRepository
  ],

})
export class GenderModule { }
