


import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { IOrmCharacterRepository } from "./orm-characters.repositor.interface";
import { IGetCharctersRepositoryDto, ICharactersRepositoryDto } from "../../dto";
import { InjectModel } from '@nestjs/sequelize';
import { characters } from "../../entities";
import { SearchFilterCharacter } from "../../interface/searchfilter.character.interface";
import { Op } from "sequelize";


@Injectable()
export class OrmBasicReportsRepository implements IOrmCharacterRepository {
    private readonly logger = new Logger('OrmBasicReportsRepository');
    constructor(
        @InjectModel(characters)
        private readonly charactersModel: typeof characters,
    ) { }
    async getAllCharacters(searchFilter: SearchFilterCharacter): Promise<IGetCharctersRepositoryDto[]> {
        try {

            const characterFilter = Object.fromEntries(
                Object.entries(searchFilter)
                    .filter(([_, value]) => value !== undefined)
                    .map(([key, value]) => {
                        if (['name', 'status'].includes(key)) {
                            return [key, { [Op.iLike]: `%${value}%` }];
                        }
                        return [key, value];
                    })
            );
            const resp = await this.charactersModel.findAll({
                where: { ...characterFilter },
                include: [{ all: true }],
            });
            return resp;

        } catch (error) {
            this.logger.error(error);
            throw new BadRequestException("Error getting characters");

        }
    }
    async getCharacterById(characterid: string): Promise<IGetCharctersRepositoryDto> {
        try {
            const resp = await this.charactersModel.findByPk(characterid, { include: [{ all: true }] });
            return resp;
        } catch (error) {
            this.logger.error(error);
            throw new BadRequestException("Error getting character");
        }

    }
    async saveCharacter(newProduct: ICharactersRepositoryDto): Promise<{ [key: string]: string; }> {
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
