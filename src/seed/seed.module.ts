import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedResolver } from './seed.resolver';
import { CommonModule } from 'src/common/common.module';
import { DatabaseModule } from 'src/db/database.module';

@Module({
  imports: [CommonModule, DatabaseModule],
  providers: [SeedResolver, SeedService],
})
export class SeedModule { }
