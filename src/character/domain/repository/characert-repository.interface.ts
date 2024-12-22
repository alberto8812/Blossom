import { SearchFilterCharacter } from "../interface/searchFilterCharacer.interface";
import { CharacterRepositoryModel, ISaveCharacterRepositoryModel } from "../model/characterRepositoryModel";

export interface CrudCharacterRepository {
    createCharacter(newCharacter: ISaveCharacterRepositoryModel): Promise<{ [key: string]: string }>;
    getAllCharacter(searchFilter: SearchFilterCharacter): Promise<CharacterRepositoryModel[]>;
    deleteCharacerById(employeeid: string): Promise<{ [key: string]: string }>;
    getCharacterById(characterId: string): Promise<CharacterRepositoryModel>;
    updateCharacter(updateCharcter: CharacterRepositoryModel): Promise<{ [key: string]: string }>;
}

