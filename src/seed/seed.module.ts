import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedResolver } from './seed.resolver';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  providers: [SeedResolver, SeedService],
})
export class SeedModule { }
