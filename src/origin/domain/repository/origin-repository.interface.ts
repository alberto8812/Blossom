import { OriginRepositoryModel, ISaveOriginRepositoryModel } from "../model/OriginRepositoryModel";

export interface CrudOriginRepository {
    createOrigin(newOrigin: ISaveOriginRepositoryModel): Promise<{ [key: string]: string }>;
    getAllOrigin(): Promise<OriginRepositoryModel[]>;
    deleteOriginById(originId: string): Promise<{ [key: string]: string }>;
    getOriginById(originId: string): Promise<OriginRepositoryModel>;
    updateOrigin(updateOrigin: OriginRepositoryModel): Promise<{ [key: string]: string }>;
}

