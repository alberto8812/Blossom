import { Inject, Injectable } from "@nestjs/common";
import { CrudCharacterRepository } from "./characert-repository.interface";

@Injectable()
export class CharacterRepository implements CrudCharacterRepository {

    constructor(

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