


import { ICharactersRepositoryDto, IGetCharctersRepositoryDto } from "../../dto/character-repository.dto";
import { SearchFilterCharacter } from "../../interface/searchfilter.character.interface";

export interface IOrmCharacterRepository {
    getAllCharacters(searchFilter: SearchFilterCharacter): Promise<IGetCharctersRepositoryDto[]>;
    getCharacterById(characterid: string): Promise<IGetCharctersRepositoryDto>;
    saveCharacter(newProduct: ICharactersRepositoryDto): Promise<{ [key: string]: string; }>;
    updateCharacter(characterid: string, newProduct: ICharactersRepositoryDto): Promise<{ [key: string]: string; }>;
    deleteCharacter(characterid: string): Promise<{ [key: string]: string; }>;

}