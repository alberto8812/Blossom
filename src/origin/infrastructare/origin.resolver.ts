import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { Inject } from '@nestjs/common';
import { UseCaseCharacterService } from '../aplication/character-use-case.interface';
import { CharacterService } from '../aplication/character-use-case.service';
import { OriginRepositoryModelObj } from './graphql/output/Origin.type';
import { SaveOriginRepositoryModeInput, UpdateOriginRepositoryModeInput } from './graphql/input/create-origin.input';
import { OriginResponseObj, OriginsResponseObj } from './graphql/output/origin-response.type';



@Resolver(() => OriginRepositoryModelObj)
export class OriginResolver {
  constructor(
    @Inject(CharacterService) private characterService: UseCaseCharacterService,
  ) { }

  @Mutation(() => OriginRepositoryModelObj, { name: 'createOrigin' })
  createOrigin(@Args('createOriginInput') createOirignInput: SaveOriginRepositoryModeInput) {
    return this.characterService.createCharacter(createOirignInput);
  }

  @Query(() => OriginsResponseObj, { name: 'get_all_origin' })
  findAll() {
    return this.characterService.getAllCharacter();
  }

  @Query(() => OriginResponseObj, { name: 'get_one_origin' })
  findOne(@Args('id', { type: () => String }) id: string) {
    console.log(id);
    return this.characterService.getCharacterById(id);
  }

  @Mutation(() => OriginRepositoryModelObj, { name: 'updateOrigin' })
  updateOrigin(@Args('updateOriginInput') updateOriginInput: UpdateOriginRepositoryModeInput) {
    return this.characterService.updateCharacterById(updateOriginInput);
  }

  @Mutation(() => OriginRepositoryModelObj, { name: 'removeCharacter' })
  removeOrigin(@Args('id', { type: () => String }) id: string) {
    return this.characterService.deleteCharacerById(id);
  }
}
