import { Module } from '@nestjs/common';
import { CharacterService } from './aplication/character-use-case.service';
import { CharacterResolver } from './infrastructare/character.resolver';
import { CharacterRepository } from './domain/repository/character.repository';
import { DatabaseModule } from 'src/db/database.module';


@Module({
  imports: [
    DatabaseModule
  ],
  providers: [
    CharacterResolver
    , CharacterService
    , CharacterRepository
  ],

})
export class CharacterModule { }
