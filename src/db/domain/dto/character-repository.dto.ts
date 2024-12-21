export interface ICharactersRepositoryDto {
    name: string
    status: string
    img: string
    species: string

}

export interface IGetCharctersRepositoryDto extends ICharactersRepositoryDto {
    id: string
}