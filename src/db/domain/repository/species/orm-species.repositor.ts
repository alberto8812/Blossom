


import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { ICharactersRepositoryDto } from "../../dto";
import { InjectModel } from '@nestjs/sequelize';
import { origins } from "../../entities/origin.entities";
import { IGetOriginRepositoryDto } from "../../dto/origin-repository.dto";
import { IOrmSpeciesRepository } from "./orm-species.repositor.interface";
import { species } from "../../entities";


@Injectable()
export class OrmSpeciesRepository implements IOrmSpeciesRepository {
    private readonly logger = new Logger('OrmSpeciesRepository');
    constructor(
        @InjectModel(species)
        private readonly speciesModel: typeof species,
    ) { }
    async getAllSpecies(): Promise<IGetOriginRepositoryDto[]> {
        try {
            const resp = await this.speciesModel.findAll({ raw: true });
            return resp;

        } catch (error) {
            this.logger.error(error);
            throw new BadRequestException("Error getting characters");

        }
    }
    async getSpeciesById(speciesId: string): Promise<IGetOriginRepositoryDto> {
        try {
            const resp = await this.speciesModel.findByPk(speciesId, { raw: true });
            return resp;
        } catch (error) {
            this.logger.error(error);
            throw new BadRequestException("Error getting character");
        }

    }
    async saveSpecies(newspecies: ICharactersRepositoryDto): Promise<{ [key: string]: string; }> {
        try {
            const resp = await this.speciesModel.create(newspecies);
            return {
                message: "Character created"
            }
        } catch (error) {
            this.logger.error(error);
            throw new BadRequestException("Error creating character");
        }
    }
    async updateSpecies(speciesId: string, newOrigin: IGetOriginRepositoryDto): Promise<{ [key: string]: string; }> {
        const resp = await this.speciesModel.update(newOrigin, { where: { id: speciesId } });
        return {
            message: "Character updated"

        }
    }
    async deleteSpecies(speciesId: string): Promise<{ [key: string]: string; }> {
        await this.speciesModel.destroy({ where: { id: speciesId } });
        return {
            message: "Character deleted"
        }
    }




}
