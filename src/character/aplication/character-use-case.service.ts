import { Inject, Injectable } from '@nestjs/common';
import { UseCaseCharacterService } from './character-use-case.interface';
import { CharacterRepository } from '../domain/repository/character.repository';
import { CrudCharacterRepository } from '../domain/repository/characert-repository.interface';

@Injectable()
export class CharacterService implements UseCaseCharacterService {
  constructor(
    @Inject(CharacterRepository) private characterRepository: CrudCharacterRepository
  ) {

  }
  updateCharacterById(): Promise<any[]> {
    throw new Error('Method not implemented.');
  }
  createCharacter(newEmploye: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getAllCharacter(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  deleteCharacerById(employeeid: number): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getCharacterById(): Promise<any> {
    throw new Error('Method not implemented.');
  }

}
