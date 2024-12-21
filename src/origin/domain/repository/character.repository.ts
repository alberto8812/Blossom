import { Inject, Injectable } from "@nestjs/common";
import { CrudCharacterRepository } from "./characert-repository.interface";
import { OrmBasicReportsRepository } from "src/db/domain/repository/charcters/orm-characters.repositor";
import { IOrmCharacterRepository } from "src/db/domain/repository/charcters/orm-characters.repositor.interface";
import { ISaveCharacterRepositoryModel, CharacterRepositoryModel } from "../model/OriginRepositoryModel";

@Injectable()
export class CharacterRepository implements CrudCharacterRepository {

    constructor(
        @Inject(OrmBasicReportsRepository)
        private readonly ormBasicReportsRepository: IOrmCharacterRepository
    ) { }
    createCharacter(newCharacter: ISaveCharacterRepositoryModel): Promise<{ [key: string]: string; }> {
        return this.ormBasicReportsRepository.saveCharacter(newCharacter);
    }
    getAllCharacter(): Promise<CharacterRepositoryModel[]> {
        return this.ormBasicReportsRepository.getAllCharacters();
    }
    deleteCharacerById(employeeid: string): Promise<{ [key: string]: string; }> {
        return this.ormBasicReportsRepository.deleteCharacter(employeeid);
    }
    getCharacterById(characterId: string): Promise<CharacterRepositoryModel> {
        return this.ormBasicReportsRepository.getCharacterById(characterId);
    }
    updateCharacter(updateCharcter: CharacterRepositoryModel): Promise<{ [key: string]: string; }> {
        const { id, ...rest } = updateCharcter;
        return this.ormBasicReportsRepository.updateCharacter(id, rest);
    }


}