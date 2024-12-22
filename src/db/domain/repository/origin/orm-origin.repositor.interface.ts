import { IGetOriginRepositoryDto, IOriginRepositoryDto } from "../../dto/origin-repository.dto";


export interface IOrmOriginRepository {
    getAllOrigin(): Promise<IGetOriginRepositoryDto[]>;
    getOriginById(originId: string): Promise<IGetOriginRepositoryDto>;
    saveOrigin(newOrigin: IOriginRepositoryDto): Promise<{ [key: string]: string; }>;
    updateOrigin(originId: string, newOrigin: IOriginRepositoryDto): Promise<{ [key: string]: string; }>;
    deleteOrigin(OriginId: string): Promise<{ [key: string]: string; }>;

}