import { Inject, Injectable } from "@nestjs/common";

import { CrudOriginRepository } from "./origin-repository.interface";
import { ISaveOriginRepositoryModel, OriginRepositoryModel } from "../model/OriginRepositoryModel";
import { OrmOriginRepository } from "src/db/domain/repository/origin/orm-origin.repositor";
import { IOrmOriginRepository } from "src/db/domain/repository/origin/orm-origin.repositor.interface";

@Injectable()
export class OriginRepository implements CrudOriginRepository {

    constructor(
        @Inject(OrmOriginRepository)
        private readonly ormBasicReportsRepository: IOrmOriginRepository
    ) { }
    createOrigin(newOrigin: ISaveOriginRepositoryModel): Promise<{ [key: string]: string; }> {
        return this.ormBasicReportsRepository.saveOrigin(newOrigin);
    }
    getAllOrigin(): Promise<OriginRepositoryModel[]> {
        return this.ormBasicReportsRepository.getAllOrigin();
    }
    deleteOriginById(originId: string): Promise<{ [key: string]: string; }> {
        return this.ormBasicReportsRepository.deleteOrigin(originId);
    }
    getOriginById(originId: string): Promise<OriginRepositoryModel> {
        return this.ormBasicReportsRepository.getOriginById(originId);
    }
    updateOrigin(updateOrigin: OriginRepositoryModel): Promise<{ [key: string]: string; }> {
        const { id, ...rest } = updateOrigin;
        return this.ormBasicReportsRepository.updateOrigin(id, rest);
    }


}