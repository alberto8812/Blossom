import { CharacterRepositoryModel, ISaveCharacterRepositoryModel } from "../domain/model/characterRepositoryModel";


export interface UseCaseCharacterService {
  updateCharacterById(updateCharcter: CharacterRepositoryModel): Promise<any>;
  createCharacter(newCharacter: ISaveCharacterRepositoryModel): Promise<any>;
  getAllCharacter(): Promise<IResponse<CharacterRepositoryModel>>;
  deleteCharacerById(employeeid: string): Promise<IResponse<any>>;
  getCharacterById(characterId): Promise<IResponse<CharacterRepositoryModel>>;
}

export interface IResponse<T> {
  message: string;
  code: number;
  data: T[] | T;
}