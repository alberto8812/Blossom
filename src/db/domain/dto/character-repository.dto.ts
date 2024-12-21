export interface ICharactersRepositoryDto {
    name: string
    status: string
    img: string

}

export interface IGetCharctersRepositoryDto extends ICharactersRepositoryDto {
    id: string
}