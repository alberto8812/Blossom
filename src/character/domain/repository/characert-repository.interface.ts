export interface CrudCharacterRepository {
    updateCharacterById(): Promise<any[]>;
    createCharacter(newEmploye: any): Promise<any>;
    getAllCharacter(): Promise<any>;
    deleteCharacerById(employeeid: number): Promise<any>;
    getCharacterById(): Promise<any>;
}
