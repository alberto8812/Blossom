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
}