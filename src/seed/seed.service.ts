import { Inject, Injectable } from '@nestjs/common';
import { HttpServiceAdapter } from 'src/common';
import { envs } from 'src/config/env';

import { CharactersAPIData } from './interface/charactersApi';
import { OrmSeedRepository } from 'src/db/domain/repository/seed/orm-species.repositor';
import { IOrmSeedRepository } from 'src/db/domain/repository/seed/orm-seed.repositor.interface';
import { IGetOriginRepositoryDto, IOriginRepositoryDto } from 'src/db/domain/dto/origin-repository.dto';
import { species } from '../db/domain/entities/species.entities';
import { IGetSpeciesRepositoryDto, ISpeciesRepositoryDto } from 'src/db/domain/dto/species-repository.dto';
import { ICharactersRepositoryDto, IGetCharctersRepositoryDto } from 'src/db/domain/dto';

@Injectable()
export class SeedService {
    constructor(
        private readonly httpServiceAdapter: HttpServiceAdapter,
        @Inject(OrmSeedRepository) private readonly ormSeedRepository: IOrmSeedRepository,
    ) {

    }

    async executeSeed(): Promise<boolean> {
        const url = `${envs.apiUrl}/character`

        const charactersData = await this.httpServiceAdapter.get<CharactersAPIData>(url);
        const limiteddata = charactersData.results.slice(0, 15);

        const origins = limiteddata.map((data) => {
            return {
                name: data.origin.name,
            }
        }
        );
        const uniqueOrigins = origins.filter((obj, index, self) =>
            index === self.findIndex((o) => o.name === obj.name)
        );

        const originsData = await this.ormSeedRepository.createManyorigin(uniqueOrigins);

        const species = limiteddata.map((data) => {
            return {
                name: data.species,
            }
        }
        );
        const uniqueSpecies = species.filter((obj, index, self) =>
            index === self.findIndex((o) => o.name === obj.name)
        );

        const speciesData = await this.createSpecies(uniqueSpecies);

        const character = limiteddata.map((data) => {
            return {
                name: data.name,
                status: data.status,
                species: data.species,
                img: data.image,
                originId: originsData.find((origin) => origin.name === data.origin.name).id,
                speciesId: speciesData.find((species) => species.name === data.species).id,
            }
        }
        );

        await this.createCharacters(character);
        return true;

    }

    async createOrigin(origins: IOriginRepositoryDto[]): Promise<IGetOriginRepositoryDto[]> {
        return await this.ormSeedRepository.createManyorigin(origins);

    }

    async createSpecies(species: ISpeciesRepositoryDto[]): Promise<IGetSpeciesRepositoryDto[]> {
        return await this.ormSeedRepository.createManySpecies(species);
    }

    async createCharacters(characters: ICharactersRepositoryDto[]): Promise<IGetCharctersRepositoryDto[]> {
        return await this.ormSeedRepository.createManyCharacters(characters);
    }
}
