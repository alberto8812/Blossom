import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { envs } from 'src/config/env';
import { characters, origins, species } from './domain/entities';
import { OrmBasicReportsRepository } from './domain/repository/charcters/orm-characters.repositor';
import { OrmOriginRepository } from './domain/repository/origin/orm-origin.repositor';
import { OrmSpeciesRepository } from './domain/repository/species/orm-species.repositor';


@Module({
  providers: [OrmBasicReportsRepository, OrmOriginRepository, OrmSpeciesRepository],
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        dialect: 'postgres',
        host: envs.host,  // Usamos directamente el objeto `envs`
        port: envs.dbport,
        username: envs.username,
        password: envs.password,
        database: envs.database,
        models: [characters, origins, species],  // Aquí incluyes todas las entidades que utilizarás
        autoLoadModels: true,
        synchronize: true,  // Establece esto en `false` para producción
      }),
    }),
    SequelizeModule.forFeature([characters, origins, species]),
  ],
  exports: [OrmBasicReportsRepository, OrmOriginRepository, OrmSpeciesRepository],
})
export class DatabaseModule { }