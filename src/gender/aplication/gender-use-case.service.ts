import { BadRequestException, Inject, Injectable, Logger } from '@nestjs/common';
import { IResponse, UseCaseGenderService } from './gender-use-case.interface';
import { GenderRepository } from '../domain/repository/gender.repository';
import { CrudGenderRepository } from '../domain/repository/gender-repository.interface';
import { GenderRepositoryModel, ISaveGenderRepositoryModel } from '../domain/model/genderRepositoryModel';

@Injectable()
export class GenderService implements UseCaseGenderService {
  private readonly logger = new Logger('GenderService');
  constructor(
    @Inject(GenderRepository) private GenderRepository: CrudGenderRepository
  ) {

  }
  async updateGenderById(updateCharcter: GenderRepositoryModel): Promise<any> {
    try {
      const character = await this.GenderRepository.updateGender(updateCharcter);
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
  async createGender(newCharacter: ISaveGenderRepositoryModel): Promise<any> {
    try {
      const character = await this.GenderRepository.createGender(newCharacter);
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
  async getAllGender(): Promise<IResponse<GenderRepositoryModel>> {
    try {
      const character = await this.GenderRepository.getAllGender();
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
  async deleteGenderById(employeeid: string): Promise<IResponse<any>> {
    try {
      const character = await this.GenderRepository.deleteGenderById(employeeid);
      return {
        message: 'Character deleted',
        code: 200,
        data: character
      }
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException("Error deleting character");
    }
  }
  async getGenderById(characterId: string): Promise<IResponse<GenderRepositoryModel>> {
    const character = await this.GenderRepository.getGenderById(characterId);
    return {
      message: 'Character found',
      code: 200,
      data: character
    }
  }


}
