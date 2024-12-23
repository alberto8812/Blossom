import { BadRequestException, Inject, Injectable, Logger } from "@nestjs/common";
import { CrudCharacterRepository } from "./characert-repository.interface";
import { OrmBasicReportsRepository } from "src/db/domain/repository/charcters/orm-characters.repositor";
import { IOrmCharacterRepository } from "src/db/domain/repository/charcters/orm-characters.repositor.interface";
import { ISaveCharacterRepositoryModel, CharacterRepositoryModel } from "../model/characterRepositoryModel";
import { SearchFilterCharacter } from "../interface/searchFilterCharacer.interface";

@Injectable()
export class CharacterRepository implements CrudCharacterRepository {
    private readonly logger = new Logger('CharacterRepository');
    constructor(
        @Inject(OrmBasicReportsRepository)
        private readonly ormBasicReportsRepository: IOrmCharacterRepository
    ) { }
    createCharacter(newCharacter: ISaveCharacterRepositoryModel): Promise<{ [key: string]: string; }> {
        try {
            return this.ormBasicReportsRepository.saveCharacter(newCharacter);
        } catch (error) {
            this.logger.error(error);
            throw new BadRequestException("Error creating character");
        }
    }
    getAllCharacter(searchfilter: SearchFilterCharacter): Promise<CharacterRepositoryModel[]> {
        try {
            return this.ormBasicReportsRepository.getAllCharacters(searchfilter);
        } catch (error) {
            this.logger.error(error);
            throw new BadRequestException("Error getting characters");
        }
    }
    deleteCharacerById(employeeid: string): Promise<{ [key: string]: string; }> {
        return this.ormBasicReportsRepository.deleteCharacter(employeeid);
    }
    getCharacterById(characterId: string): Promise<CharacterRepositoryModel> {
        try {
            return this.ormBasicReportsRepository.getCharacterById(characterId);
        } catch (error) {
            this.logger.error(error);
            throw new BadRequestException("Error getting character");
        }
    }
    updateCharacter(updateCharcter: CharacterRepositoryModel): Promise<{ [key: string]: string; }> {
        const { id, ...rest } = updateCharcter;
        return this.ormBasicReportsRepository.updateCharacter(id, rest);
    }


}