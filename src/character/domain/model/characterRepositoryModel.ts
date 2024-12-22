import { GenderRepositoryModel } from "src/gender/domain/model/genderRepositoryModel";
import { OriginRepositoryModel } from "src/origin/domain/model/OriginRepositoryModel";

export interface CharacterRepositoryModel {
    id: string;
    name: string;
    status: string;
    img: string;
    species: string;
    originId: string;
    speciesId: string;
    origin?: OriginRepositoryModel;
    specie?: GenderRepositoryModel;
}

export type ISaveCharacterRepositoryModel = Omit<CharacterRepositoryModel, 'id'>