import { OriginRepositoryModel, ISaveOriginRepositoryModel } from "../domain/model/OriginRepositoryModel";


export interface UseCaseCharacterService {
  updateCharacterById(updateOrigin: OriginRepositoryModel): Promise<any>;
  createCharacter(newOrigin: ISaveOriginRepositoryModel): Promise<any>;
  getAllCharacter(): Promise<IResponse<ISaveOriginRepositoryModel>>;
  deleteCharacerById(originId: string): Promise<IResponse<any>>;
  getCharacterById(OriginId: string): Promise<IResponse<OriginRepositoryModel>>;
}

export interface IResponse<T> {
  message: string;
  code: number;
  data: T[] | T;
}