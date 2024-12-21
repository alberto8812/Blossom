import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envs } from 'src/config/env';
import { characters } from './domain/entities';


@Module({
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
        models: [characters],  // Aquí incluyes todas las entidades que utilizarás
        autoLoadModels: true,
        synchronize: true,  // Establece esto en `false` para producción
      }),
    }),
  ],
})
export class DatabaseModule { }
