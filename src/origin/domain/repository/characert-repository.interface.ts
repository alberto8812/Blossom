import { CharacterRepositoryModel, ISaveCharacterRepositoryModel } from "../model/OriginRepositoryModel";

export interface CrudCharacterRepository {
    createCharacter(newCharacter: ISaveCharacterRepositoryModel): Promise<{ [key: string]: string }>;
    getAllCharacter(): Promise<CharacterRepositoryModel[]>;
    deleteCharacerById(employeeid: string): Promise<{ [key: string]: string }>;
    getCharacterById(characterId: string): Promise<CharacterRepositoryModel>;
    updateCharacter(updateCharcter: CharacterRepositoryModel): Promise<{ [key: string]: string }>;
}

