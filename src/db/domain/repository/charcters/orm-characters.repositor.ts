


import { Injectable } from "@nestjs/common";
import { IOrmCharacterRepository } from "./orm-characters.repositor.interface";
import { IGetCharctersRepositoryDto, ICharactersRepositoryDto } from "../../dto";
import { InjectModel } from '@nestjs/sequelize';
import { characters } from "../../entities";


@Injectable()
export class OrmBasicReportsRepository implements IOrmCharacterRepository {

    constructor(
        @InjectModel(characters)
        private readonly charactersModel: typeof characters,
    ) { }


    async getAllCharacters(): Promise<IGetCharctersRepositoryDto[]> {
        return [];
    }
    getCharacterById(characterid: number): Promise<IGetCharctersRepositoryDto> {
        throw new Error("Method not implemented.");
    }
    saveCharacter(newProduct: ICharactersRepositoryDto): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateCharacter(characterid: number, newProduct: ICharactersRepositoryDto): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteCharacter(characterid: number): Promise<void> {
        throw new Error("Method not implemented.");
    }


}
