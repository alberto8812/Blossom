import { Inject, Injectable } from "@nestjs/common";
import { CrudOriginRepository } from "./origin-repository.interface";
import { OrmBasicReportsRepository } from "src/db/domain/repository/charcters/orm-characters.repositor";
import { IOrmCharacterRepository } from "src/db/domain/repository/charcters/orm-characters.repositor.interface";
import { ISaveOriginRepositoryModel, OriginRepositoryModel } from "../model/OriginRepositoryModel";

@Injectable()
export class OriginRepository implements CrudOriginRepository {

    constructor(
        @Inject(OrmBasicReportsRepository)
        private readonly ormBasicReportsRepository: IOrmCharacterRepository
    ) { }
    createCharacter(newCharacter: ISaveOriginRepositoryModel): Promise<{ [key: string]: string; }> {
        return this.ormBasicReportsRepository.saveCharacter(newCharacter);
    }
    getAllCharacter(): Promise<OriginRepositoryModel[]> {
        return this.ormBasicReportsRepository.getAllCharacters();
    }
    deleteCharacerById(employeeid: string): Promise<{ [key: string]: string; }> {
        return this.ormBasicReportsRepository.deleteCharacter(employeeid);
    }
    getCharacterById(characterId: string): Promise<OriginRepositoryModel> {
        return this.ormBasicReportsRepository.getCharacterById(characterId);
    }
    updateCharacter(updateCharcter: OriginRepositoryModel): Promise<{ [key: string]: string; }> {
        const { id, ...rest } = updateCharcter;
        return this.ormBasicReportsRepository.updateCharacter(id, rest);
    }


}