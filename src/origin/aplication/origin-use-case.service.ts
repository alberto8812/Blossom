import { Inject, Injectable } from '@nestjs/common';
import { IResponse, UseCaseOriginService } from './origin-use-case.interface';
import { OriginRepository } from '../domain/repository/origin.repository';
import { CrudOriginRepository } from '../domain/repository/origin-repository.interface';
import { OriginRepositoryModel, ISaveOriginRepositoryModel } from '../domain/model/OriginRepositoryModel';

@Injectable()
export class OriginService implements UseCaseOriginService {
  constructor(
    @Inject(OriginRepository) private originRepository: CrudOriginRepository
  ) {

  }
  async updateOriginById(updateOrigin: OriginRepositoryModel): Promise<any> {
    const character = await this.originRepository.updateOrigin(updateOrigin);
    return {
      message: 'Character updated',
      code: 200,
      data: character
    }
  }
  async createOrigin(newOrigin: ISaveOriginRepositoryModel): Promise<any> {
    const character = await this.originRepository.createOrigin(newOrigin);
    return {
      message: 'Character created',
      code: 200,
      data: character
    }
  }
  async getAllOrigin(): Promise<IResponse<OriginRepositoryModel>> {
    const character = await this.originRepository.getAllOrigin();
    return {
      message: 'Character list',
      code: 200,
      data: character
    }
  }
  async deleteOriginById(OriginId: string): Promise<IResponse<any>> {
    const character = await this.originRepository.deleteOriginById(OriginId);
    return {
      message: 'Character deleted',
      code: 200,
      data: character
    }
  }
  async getOriginById(OriginId: string): Promise<IResponse<OriginRepositoryModel>> {
    const character = await this.originRepository.getOriginById(OriginId);
    console.log(character, 'character');
    return {
      message: 'Character found',
      code: 200,
      data: character
    }
  }


}
