


import { ICharactersRepositoryDto, IGetCharctersRepositoryDto } from "../../dto/character-repository.dto";

export interface IOrmCharacterRepository {
    getAllCharacters(): Promise<IGetCharctersRepositoryDto[]>;
    getCharacterById(characterid: string): Promise<IGetCharctersRepositoryDto>;
    saveCharacter(newProduct: ICharactersRepositoryDto): Promise<{ [key: string]: string; }>;
    updateCharacter(characterid: string, newProduct: ICharactersRepositoryDto): Promise<{ [key: string]: string; }>;
    deleteCharacter(characterid: string): Promise<{ [key: string]: string; }>;

}