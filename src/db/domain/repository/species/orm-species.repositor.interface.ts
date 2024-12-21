
import { IGetSpeciesRepositoryDto, ISpeciesRepositoryDto } from "../../dto/species-repository.dto";


export interface IOrmSpeciesRepository {
    getAllSpecies(): Promise<IGetSpeciesRepositoryDto[]>;
    getSpeciesById(speciesId: string): Promise<IGetSpeciesRepositoryDto>;
    saveSpecies(newspecies: ISpeciesRepositoryDto): Promise<{ [key: string]: string; }>;
    updateSpecies(speciesId: string, newspecies: IGetSpeciesRepositoryDto): Promise<{ [key: string]: string; }>;
    deleteSpecies(speciesId: string): Promise<{ [key: string]: string; }>;

}