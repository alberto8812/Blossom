export interface GenderRepositoryModel {
    id: string;
    name: string;
}

export type ISaveGenderRepositoryModel = Omit<GenderRepositoryModel, 'id'>