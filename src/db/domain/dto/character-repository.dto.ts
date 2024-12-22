import { IGetOriginRepositoryDto } from "./origin-repository.dto";
import { IGetSpeciesRepositoryDto } from "./species-repository.dto";

export interface ICharactersRepositoryDto {
    name: string
    status: string
    img: string
    species: string
    originId: string;
    speciesId: string;

}

export interface IGetCharctersRepositoryDto extends ICharactersRepositoryDto {
    id: string
    origin?: IGetOriginRepositoryDto;
    specie?: IGetSpeciesRepositoryDto;
}