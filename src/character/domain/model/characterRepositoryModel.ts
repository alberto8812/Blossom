export interface CharacterRepositoryModel {
    id: string;
    name: string;
    status: string;
    img: string;
    species: string;
    originId: string;
    speciesId: string;
}

export type ISaveCharacterRepositoryModel = Omit<CharacterRepositoryModel, 'id'>