import { Inject, Injectable } from '@nestjs/common';
import { IResponse, UseCaseCharacterService } from './origin-use-case.interface';
import { OriginRepository } from '../domain/repository/origin.repository';
import { CrudOriginRepository } from '../domain/repository/origin-repository.interface';
import { OriginRepositoryModel, ISaveOriginRepositoryModel } from '../domain/model/OriginRepositoryModel';

@Injectable()
export class OriginService implements UseCaseCharacterService {
  constructor(
    @Inject(OriginRepository) private originRepository: CrudOriginRepository
  ) {

  }
  async updateCharacterById(updateCharcter: OriginRepositoryModel): Promise<any> {
    const character = await this.originRepository.updateCharacter(updateCharcter);
    return {
      message: 'Character updated',
      code: 200,
      data: character
    }
  }
  async createCharacter(newCharacter: ISaveOriginRepositoryModel): Promise<any> {
    const character = await this.originRepository.createCharacter(newCharacter);
    return {
      message: 'Character created',
      code: 200,
      data: character
    }
  }
  async getAllCharacter(): Promise<IResponse<OriginRepositoryModel>> {
    const character = await this.originRepository.getAllCharacter();
    return {
      message: 'Character list',
      code: 200,
      data: character
    }
  }
  async deleteCharacerById(employeeid: string): Promise<IResponse<any>> {
    const character = await this.originRepository.deleteCharacerById(employeeid);
    return {
      message: 'Character deleted',
      code: 200,
      data: character
    }
  }
  async getCharacterById(characterId: string): Promise<IResponse<OriginRepositoryModel>> {
    const character = await this.originRepository.getCharacterById(characterId);
    console.log(character, 'character');
    return {
      message: 'Character found',
      code: 200,
      data: character
    }
  }


}
