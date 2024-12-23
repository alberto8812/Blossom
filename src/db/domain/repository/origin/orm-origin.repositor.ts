


import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { IOrmOriginRepository } from "./orm-origin.repositor.interface";
import { ICharactersRepositoryDto } from "../../dto";
import { InjectModel } from '@nestjs/sequelize';
import { origins } from "../../entities/origin.entities";
import { IGetOriginRepositoryDto } from "../../dto/origin-repository.dto";


@Injectable()
export class OrmOriginRepository implements IOrmOriginRepository {
    private readonly logger = new Logger('OrmBasicReportsRepository');
    constructor(
        @InjectModel(origins)
        private readonly originsModel: typeof origins,
    ) { }
    async getAllOrigin(): Promise<IGetOriginRepositoryDto[]> {
        try {
            const resp = await this.originsModel.findAll({ raw: true });
            return resp;

        } catch (error) {
            this.logger.error(error);
            throw new BadRequestException("Error getting characters");

        }
    }
    async getOriginById(originId: string): Promise<IGetOriginRepositoryDto> {
        try {
            const resp = await this.originsModel.findByPk(originId, { raw: true });
            return resp;
        } catch (error) {
            this.logger.error(error);
            throw new BadRequestException("Error getting character");
        }

    }
    async saveOrigin(newOrigin: ICharactersRepositoryDto): Promise<{ [key: string]: string; }> {
        try {
            const resp = await this.originsModel.create(newOrigin);
            return {
                message: "Character created"
            }
        } catch (error) {
            this.logger.error(error);
            throw new BadRequestException("Error creating character");
        }
    }
    async updateOrigin(originId: string, newOrigin: IGetOriginRepositoryDto): Promise<{ [key: string]: string; }> {
        try {
            const origin = await this.originsModel.findByPk(originId);
            if (!origin) {
                throw new BadRequestException("Character not found");
            }
            return {
                message: "Character not found"
            }
        } catch (error) {
            this.logger.error(error);
            throw new BadRequestException("Error updating character");
        }
    }
    async deleteOrigin(originId: string): Promise<{ [key: string]: string; }> {
        try {
            const origin = await this.originsModel.findByPk(originId);
            if (!origin) {
                throw new BadRequestException("Character not found");
            }
            return {
                message: "Character not found"
            }

        } catch (error) {
            this.logger.error(error);
            throw new BadRequestException("Error deleting character");
        }

    }




}
