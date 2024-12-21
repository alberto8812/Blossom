import { Inject, Injectable } from "@nestjs/common";
import { CrudCharacterRepository } from "./characert-repository.interface";
import { OrmBasicReportsRepository } from "src/db/domain/repository/charcters/orm-characters.repositor";
import { IOrmCharacterRepository } from "src/db/domain/repository/charcters/orm-characters.repositor.interface";

@Injectable()
export class CharacterRepository implements CrudCharacterRepository {

    constructor(
        @Inject(OrmBasicReportsRepository)
        private readonly ormBasicReportsRepository: IOrmCharacterRepository
    ) { }
    updateCharacterById(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    createCharacter(newEmploye: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getAllCharacter(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    deleteCharacerById(employeeid: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getCharacterById(): Promise<any> {
        throw new Error("Method not implemented.");
    }

}