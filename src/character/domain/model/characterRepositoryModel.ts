export interface CharacterRepositoryModel {
    id: string;
    name: string;
    status: string;
    img: string;
    species: string;
}

export type ISaveCharacterRepositoryModel = Omit<CharacterRepositoryModel, 'id'>