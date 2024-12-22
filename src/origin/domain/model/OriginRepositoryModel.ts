export interface OriginRepositoryModel {
    id: string;
    name: string;
}

export type ISaveOriginRepositoryModel = Omit<OriginRepositoryModel, 'id'>