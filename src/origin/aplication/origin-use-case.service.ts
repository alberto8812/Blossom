import { BadRequestException, Inject, Injectable, Logger } from '@nestjs/common';
import { IResponse, UseCaseOriginService } from './origin-use-case.interface';
import { OriginRepository } from '../domain/repository/origin.repository';
import { CrudOriginRepository } from '../domain/repository/origin-repository.interface';
import { OriginRepositoryModel, ISaveOriginRepositoryModel } from '../domain/model/OriginRepositoryModel';

@Injectable()
export class OriginService implements UseCaseOriginService {
  private readonly logger = new Logger('OriginService');
  constructor(
    @Inject(OriginRepository) private originRepository: CrudOriginRepository
  ) {

  }
  async updateOriginById(updateOrigin: OriginRepositoryModel): Promise<any> {
    try {
      const character = await this.originRepository.updateOrigin(updateOrigin);
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
  async createOrigin(newOrigin: ISaveOriginRepositoryModel): Promise<any> {
    try {
      const character = await this.originRepository.createOrigin(newOrigin);
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
  async getAllOrigin(): Promise<IResponse<OriginRepositoryModel>> {
    try {
      const character = await this.originRepository.getAllOrigin();
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
  async deleteOriginById(OriginId: string): Promise<IResponse<any>> {
    try {
      const character = await this.originRepository.deleteOriginById(OriginId);
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
  async getOriginById(OriginId: string): Promise<IResponse<OriginRepositoryModel>> {
    try {
      const character = await this.originRepository.getOriginById(OriginId);
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
