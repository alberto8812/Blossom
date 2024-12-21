import { Module } from '@nestjs/common';


import { HttpServiceAdapter } from './adapters/http/http.service.adapter';





@Module({
  controllers: [],
  providers: [HttpServiceAdapter],
  exports: [HttpServiceAdapter]
})
export class CommonModule { }

