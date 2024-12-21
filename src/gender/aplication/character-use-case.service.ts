import { Inject, Injectable } from '@nestjs/common';
import { IResponse, UseCaseCharacterService } from './character-use-case.interface';
import { CharacterRepository } from '../domain/repository/character.repository';
import { CrudCharacterRepository } from '../domain/repository/characert-repository.interface';
import { CharacterRepositoryModel, ISaveCharacterRepositoryModel } from '../domain/model/characterRepositoryModel';

@Injectable()
export class CharacterService implements UseCaseCharacterService {
  constructor(
    @Inject(CharacterRepository) private characterRepository: CrudCharacterRepository
  ) {

  }
  async updateCharacterById(updateCharcter: CharacterRepositoryModel): Promise<any> {
    const character = await this.characterRepository.updateCharacter(updateCharcter);
    return {
      message: 'Character updated',
      code: 200,
      data: character
    }
  }
  async createCharacter(newCharacter: ISaveCharacterRepositoryModel): Promise<any> {
    const character = await this.characterRepository.createCharacter(newCharacter);
    return {
      message: 'Character created',
      code: 200,
      data: character
    }
  }
  async getAllCharacter(): Promise<IResponse<CharacterRepositoryModel>> {
    const character = await this.characterRepository.getAllCharacter();
    return {
      message: 'Character list',
      code: 200,
      data: character
    }
  }
  async deleteCharacerById(employeeid: string): Promise<IResponse<any>> {
    const character = await this.characterRepository.deleteCharacerById(employeeid);
    return {
      message: 'Character deleted',
      code: 200,
      data: character
    }
  }
  async getCharacterById(characterId: string): Promise<IResponse<CharacterRepositoryModel>> {
    const character = await this.characterRepository.getCharacterById(characterId);
    console.log(character, 'character');
    return {
      message: 'Character found',
      code: 200,
      data: character
    }
  }


}
