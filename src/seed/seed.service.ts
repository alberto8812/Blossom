import { Injectable } from '@nestjs/common';
import { HttpServiceAdapter } from 'src/common';
import { envs } from 'src/config/env';
import { characters } from '../db/domain/entities/characters.entities';
import { CharactersAPIData } from './interface/charactersApi';

@Injectable()
export class SeedService {
    constructor(
        private readonly httpServiceAdapter: HttpServiceAdapter,
    ) {

    }

    async executeSeed(): Promise<boolean> {
        console.log('SeedService.executeSeed()');
        const url = `${envs.apiUrl}/character`

        const charactersData = await this.httpServiceAdapter.get<CharactersAPIData>(url);
        console.log('charactersData', charactersData);
        const limiteddata = charactersData.results.slice(0, 15);

        const character = limiteddata.map((data) => {
            return {
                id: data.id,
                name: data.name,
                status: data.status,
                species: data.species,
            }
        }
        )

        return true;

    }
}
