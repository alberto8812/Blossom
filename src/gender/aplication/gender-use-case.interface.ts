import { GenderRepositoryModel, ISaveGenderRepositoryModel } from "../domain/model/genderRepositoryModel";


export interface UseCaseGenderService {
  updateGenderById(updateGender: GenderRepositoryModel): Promise<any>;
  createGender(newGender: ISaveGenderRepositoryModel): Promise<any>;
  getAllGender(): Promise<IResponse<GenderRepositoryModel>>;
  deleteGenderById(genderid: string): Promise<IResponse<any>>;
  getGenderById(genderid: string): Promise<IResponse<GenderRepositoryModel>>;
}

export interface IResponse<T> {
  message: string;
  code: number;
  data: T[] | T;
}