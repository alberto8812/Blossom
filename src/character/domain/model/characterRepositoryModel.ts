export interface CharacterRepositoryModel {
    id: bigint;
    name: string;
    status: string;
    img: string;
}

export type ISaveEmployesRepositoryModel = Omit<CharacterRepositoryModel, 'id'>