
import { ICharactersRepositoryDto, IGetCharctersRepositoryDto } from "../../dto";
import { IGetOriginRepositoryDto, IOriginRepositoryDto } from "../../dto/origin-repository.dto";
import { IGetSpeciesRepositoryDto, ISpeciesRepositoryDto } from "../../dto/species-repository.dto";


export interface IOrmSeedRepository {
    createManyorigin(origins: IOriginRepositoryDto[]): Promise<IGetOriginRepositoryDto[]>;
    createManySpecies(species: ISpeciesRepositoryDto[]): Promise<IGetSpeciesRepositoryDto[]>;
    createManyCharacters(characters: ICharactersRepositoryDto[]): Promise<IGetCharctersRepositoryDto[]>;
    getOriginByName(name: string): Promise<IGetOriginRepositoryDto>;
    getSpeciesById(name: string): Promise<IGetSpeciesRepositoryDto>;
    deleteAll(): Promise<void>;


}