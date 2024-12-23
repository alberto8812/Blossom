import { BadRequestException, Inject, Injectable, Logger } from '@nestjs/common';
import { IResponse, UseCaseCharacterService } from './character-use-case.interface';
import { CharacterRepository } from '../domain/repository/character.repository';
import { CrudCharacterRepository } from '../domain/repository/characert-repository.interface';
import { CharacterRepositoryModel, ISaveCharacterRepositoryModel } from '../domain/model/characterRepositoryModel';
import { SearchFilterCharacter } from '../domain/interface/searchFilterCharacer.interface';

@Injectable()
export class CharacterService implements UseCaseCharacterService {
  private readonly logger = new Logger('CharacterService');
  constructor(
    @Inject(CharacterRepository) private characterRepository: CrudCharacterRepository
  ) {

  }
  async updateCharacterById(updateCharcter: CharacterRepositoryModel): Promise<any> {
    try {
      const character = await this.characterRepository.updateCharacter(updateCharcter);
      return {
        message: 'Character updated',
        code: 200,
        data: character
      }
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException("Error updating character");
    }
  }
  async createCharacter(newCharacter: ISaveCharacterRepositoryModel): Promise<any> {
    try {
      const character = await this.characterRepository.createCharacter(newCharacter);
      return {
        message: 'Character created',
        code: 200,
        data: character
      }
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException("Error creating character");
    }
  }
  async getAllCharacter(searchFilter: SearchFilterCharacter): Promise<IResponse<CharacterRepositoryModel>> {
    try {
      const character = await this.characterRepository.getAllCharacter(searchFilter);
      return {
        message: 'Character list',
        code: 200,
        data: character
      }
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException("Error getting characters");
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
    try {
      const character = await this.characterRepository.getCharacterById(characterId);
      return {
        message: 'Character found',
        code: 200,
        data: character
      }

    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException("Error getting character");

    }
  }


}
