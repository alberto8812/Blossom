


import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from '@nestjs/sequelize';
import { characters, origins, species } from "../../entities";
import { IOrmSeedRepository } from "./orm-seed.repositor.interface";
import { ICharactersRepositoryDto, IGetCharctersRepositoryDto } from "../../dto";
import { IOriginRepositoryDto, IGetOriginRepositoryDto } from "../../dto/origin-repository.dto";
import { ISpeciesRepositoryDto, IGetSpeciesRepositoryDto } from "../../dto/species-repository.dto";


@Injectable()
export class OrmSeedRepository implements IOrmSeedRepository {
    private readonly logger = new Logger('OrmSpeciesRepository');
    constructor(
        @InjectModel(species)
        private readonly speciesModel: typeof species,
        @InjectModel(origins)
        private readonly originsModel: typeof origins,
        @InjectModel(characters)
        private readonly charactersModel: typeof characters,
    ) { }
    async createManyorigin(origins: IOriginRepositoryDto[]): Promise<IGetOriginRepositoryDto[]> {
        const resp = await this.originsModel.bulkCreate(origins)
        return resp.map((origin) => origin.dataValues)
    }
    async createManySpecies(species: ISpeciesRepositoryDto[]): Promise<IGetSpeciesRepositoryDto[]> {
        const resp = await this.speciesModel.bulkCreate(species)
        return resp.map((specie) => specie.dataValues)
    }
    async createManyCharacters(characters: ICharactersRepositoryDto[]): Promise<IGetCharctersRepositoryDto[]> {
        const resp = await this.charactersModel.bulkCreate(characters)
        return resp.map((character) => character.dataValues);
    }
    async getOriginByName(name: string): Promise<IGetOriginRepositoryDto> {
        return await this.originsModel.findOne({ where: { name }, raw: true })
    }
    async getSpeciesById(name: string): Promise<IGetSpeciesRepositoryDto> {
        return await this.speciesModel.findOne({ where: { name }, raw: true })
    }




}
