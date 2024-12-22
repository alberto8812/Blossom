import { OriginRepositoryModel, ISaveOriginRepositoryModel } from "../domain/model/OriginRepositoryModel";


export interface UseCaseOriginService {
  updateOriginById(updateOrigin: OriginRepositoryModel): Promise<any>;
  createOrigin(newOrigin: ISaveOriginRepositoryModel): Promise<any>;
  getAllOrigin(): Promise<IResponse<ISaveOriginRepositoryModel>>;
  deleteOriginById(originId: string): Promise<IResponse<any>>;
  getOriginById(OriginId: string): Promise<IResponse<OriginRepositoryModel>>;
}

export interface IResponse<T> {
  message: string;
  code: number;
  data: T[] | T;
}