


import { ICharactersRepositoryDto, IGetCharctersRepositoryDto } from "../../dto/character-repository.dto";

export interface IOrmCharacterRepository {
    getAllCharacters(): Promise<IGetCharctersRepositoryDto[]>;
    getCharacterById(characterid: number): Promise<IGetCharctersRepositoryDto>;
    saveCharacter(newProduct: ICharactersRepositoryDto): Promise<void>;
    updateCharacter(characterid: number, newProduct: ICharactersRepositoryDto): Promise<void>;
    deleteCharacter(characterid: number): Promise<void>;

}