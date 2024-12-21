import { Inject, Injectable } from '@nestjs/common';
import { IResponse, UseCaseGenderService } from './gender-use-case.interface';
import { GenderRepository } from '../domain/repository/gender.repository';
import { CrudGenderRepository } from '../domain/repository/gender-repository.interface';
import { GenderRepositoryModel, ISaveGenderRepositoryModel } from '../domain/model/genderRepositoryModel';

@Injectable()
export class GenderService implements UseCaseGenderService {
  constructor(
    @Inject(GenderRepository) private GenderRepository: CrudGenderRepository
  ) {

  }
  async updateGenderById(updateCharcter: GenderRepositoryModel): Promise<any> {
    const character = await this.GenderRepository.updateGender(updateCharcter);
    return {
      message: 'Character updated',
      code: 200,
      data: character
    }
  }
  async createGender(newCharacter: ISaveGenderRepositoryModel): Promise<any> {
    const character = await this.GenderRepository.createGender(newCharacter);
    return {
      message: 'Character created',
      code: 200,
      data: character
    }
  }
  async getAllGender(): Promise<IResponse<GenderRepositoryModel>> {
    const character = await this.GenderRepository.getAllGender();
    return {
      message: 'Character list',
      code: 200,
      data: character
    }
  }
  async deleteGenderById(employeeid: string): Promise<IResponse<any>> {
    const character = await this.GenderRepository.deleteGenderById(employeeid);
    return {
      message: 'Character deleted',
      code: 200,
      data: character
    }
  }
  async getGenderById(characterId: string): Promise<IResponse<GenderRepositoryModel>> {
    const character = await this.GenderRepository.getGenderById(characterId);
    console.log(character, 'character');
    return {
      message: 'Character found',
      code: 200,
      data: character
    }
  }


}
