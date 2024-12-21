import { OriginRepositoryModel, ISaveOriginRepositoryModel } from "../model/OriginRepositoryModel";

export interface CrudOriginRepository {
    createCharacter(newCharacter: ISaveOriginRepositoryModel): Promise<{ [key: string]: string }>;
    getAllCharacter(): Promise<OriginRepositoryModel[]>;
    deleteCharacerById(employeeid: string): Promise<{ [key: string]: string }>;
    getCharacterById(characterId: string): Promise<OriginRepositoryModel>;
    updateCharacter(updateCharcter: OriginRepositoryModel): Promise<{ [key: string]: string }>;
}

