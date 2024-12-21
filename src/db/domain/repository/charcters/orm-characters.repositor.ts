


import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { IOrmCharacterRepository } from "./orm-characters.repositor.interface";
import { IGetCharctersRepositoryDto, ICharactersRepositoryDto } from "../../dto";
import { InjectModel } from '@nestjs/sequelize';
import { characters } from "../../entities";


@Injectable()
export class OrmBasicReportsRepository implements IOrmCharacterRepository {
    private readonly logger = new Logger('OrmBasicReportsRepository');
    constructor(
        @InjectModel(characters)
        private readonly charactersModel: typeof characters,
    ) { }
    async getAllCharacters(): Promise<IGetCharctersRepositoryDto[]> {
        try {
            const resp = await this.charactersModel.findAll({ raw: true });
            return resp;

        } catch (error) {
            this.logger.error(error);
            throw new BadRequestException("Error getting characters");

        }
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
            this.logger.error(error);
            throw new BadRequestException("Error creating character");
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
