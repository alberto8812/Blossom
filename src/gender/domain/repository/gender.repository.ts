import { Inject, Injectable } from "@nestjs/common";
import { CrudGenderRepository } from "./gender-repository.interface";
import { GenderRepositoryModel, ISaveGenderRepositoryModel } from "../model/genderRepositoryModel";
import { OrmSpeciesRepository } from "src/db/domain/repository/species/orm-species.repositor";
import { IOrmSpeciesRepository } from "src/db/domain/repository/species/orm-species.repositor.interface";


@Injectable()
export class GenderRepository implements CrudGenderRepository {

    constructor(
        @Inject(OrmSpeciesRepository)
        private readonly ormSpeciesRepository: IOrmSpeciesRepository
    ) { }
    createGender(newGender: ISaveGenderRepositoryModel): Promise<{ [key: string]: string; }> {
        return this.ormSpeciesRepository.saveSpecies(newGender);
    }
    getAllGender(): Promise<GenderRepositoryModel[]> {
        return this.ormSpeciesRepository.getAllSpecies();
    }
    deleteGenderById(genderid: string): Promise<{ [key: string]: string; }> {
        return this.ormSpeciesRepository.deleteSpecies(genderid);
    }
    getGenderById(genderid: string): Promise<GenderRepositoryModel> {
        return this.ormSpeciesRepository.getSpeciesById(genderid);
    }
    updateGender(updateCharcter: GenderRepositoryModel): Promise<{ [key: string]: string; }> {
        const { id, ...rest } = updateCharcter;
        return this.ormSpeciesRepository.updateSpecies(id, rest);
    }


}