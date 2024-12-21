


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
        return await this.charactersModel.findAll();
    }
    getCharacterById(characterid: string): Promise<IGetCharctersRepositoryDto> {
        return this.charactersModel.findByPk(characterid);
    }
    async saveCharacter(newProduct: ICharactersRepositoryDto): Promise<{ [key: string]: string; }> {
        console.log(newProduct);
        try {
            const resp = await this.charactersModel.create(newProduct);
            return {
                message: "Character created"
            }
        } catch (error) {
            console.log(error);
            return {
                message: "Character not created"
            }
        }
    }
    async updateCharacter(characterid: string, newProduct: ICharactersRepositoryDto): Promise<{ [key: string]: string; }> {
        const resp = await this.charactersModel.update(newProduct, { where: { id: characterid } });
        return {
            message: "Character updated"

        }
    }
    async deleteCharacter(characterid: string): Promise<{ [key: string]: string; }> {
        await this.charactersModel.destroy({ where: { id: characterid } });
        return {
            message: "Character deleted"
        }
    }




}
