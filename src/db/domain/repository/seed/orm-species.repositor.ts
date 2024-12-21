


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
    createManyorigin(origins: IOriginRepositoryDto[]): Promise<IGetOriginRepositoryDto[]> {
        return this.originsModel.bulkCreate(origins)
    }
    createManySpecies(species: ISpeciesRepositoryDto[]): Promise<IGetSpeciesRepositoryDto[]> {
        return this.speciesModel.bulkCreate(species)
    }
    createManyCharacters(characters: ICharactersRepositoryDto[]): Promise<IGetCharctersRepositoryDto[]> {
        return this.charactersModel.bulkCreate(characters)
    }
    getOriginByName(name: string): Promise<IGetOriginRepositoryDto> {
        return this.originsModel.findOne({ where: { name }, raw: true })
    }
    getSpeciesById(name: string): Promise<IGetSpeciesRepositoryDto> {
        return this.speciesModel.findOne({ where: { name }, raw: true })
    }




}
