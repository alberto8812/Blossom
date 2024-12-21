

export interface UseCaseCharacterService {
  updateCharacterById(): Promise<any[]>;
  createCharacter(newEmploye: any): Promise<any>;
  getAllCharacter(): Promise<any>;
  deleteCharacerById(employeeid: number): Promise<any>;
  getCharacterById(): Promise<any>;
}

export interface IResponse {
  message: string;
  code: number;
}