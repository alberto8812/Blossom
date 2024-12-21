import { GenderRepositoryModel, ISaveGenderRepositoryModel } from "../model/characterRepositoryModel";

export interface CrudGenderRepository {
    createGender(newGender: ISaveGenderRepositoryModel): Promise<{ [key: string]: string }>;
    getAllGender(): Promise<GenderRepositoryModel[]>;
    deleteGenderById(genderid: string): Promise<{ [key: string]: string }>;
    getGenderById(genderid: string): Promise<GenderRepositoryModel>;
    updateGender(updateGender: GenderRepositoryModel): Promise<{ [key: string]: string }>;
}

