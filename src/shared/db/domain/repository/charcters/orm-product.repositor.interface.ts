


import { ICharactersRepositoryDto, IGetCharctersRepositoryDto } from "../../dto/character-repository.dto";

export interface IOrmCharacterRepository {
    getAllCharacters(): Promise<IGetCharctersRepositoryDto[]>;
    getCharacterById(employeeid: number): Promise<IGetCharctersRepositoryDto>;
    saveCharacter(newProduct: ICharactersRepositoryDto): Promise<void>;
    updateCharacter(employeeid: number, newProduct: ICharactersRepositoryDto): Promise<void>;
    deleteCharacter(employeeid: number): Promise<void>;

}