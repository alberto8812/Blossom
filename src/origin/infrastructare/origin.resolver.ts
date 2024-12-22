import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { Inject } from '@nestjs/common';
import { UseCaseOriginService } from '../aplication/origin-use-case.interface';
import { OriginService } from '../aplication/origin-use-case.service';
import { OriginRepositoryModelObj } from './graphql/output/Origin.type';
import { SaveOriginRepositoryModeInput, UpdateOriginRepositoryModeInput } from './graphql/input/create-origin.input';
import { OriginResponseObj, OriginsResponseObj } from './graphql/output/origin-response.type';



@Resolver(() => OriginRepositoryModelObj)
export class OriginResolver {
  constructor(
    @Inject(OriginService) private OriginService: UseCaseOriginService,
  ) { }

  @Mutation(() => OriginRepositoryModelObj, { name: 'createOrigin' })
  createOrigin(@Args('createOriginInput') createOirignInput: SaveOriginRepositoryModeInput) {
    return this.OriginService.createOrigin(createOirignInput);
  }

  @Query(() => OriginsResponseObj, { name: 'get_all_origin' })
  findAll() {
    return this.OriginService.getAllOrigin();
  }

  @Query(() => OriginResponseObj, { name: 'get_one_origin' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.OriginService.getOriginById(id);
  }

  @Mutation(() => OriginRepositoryModelObj, { name: 'updateOrigin' })
  updateOrigin(@Args('updateOriginInput') updateOriginInput: UpdateOriginRepositoryModeInput) {
    return this.OriginService.updateOriginById(updateOriginInput);
  }

  @Mutation(() => OriginRepositoryModelObj, { name: 'removeCharacter' })
  removeOrigin(@Args('id', { type: () => String }) id: string) {
    return this.OriginService.deleteOriginById(id);
  }
}
