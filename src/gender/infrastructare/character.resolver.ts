import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { Inject } from '@nestjs/common';
import { UseCaseGenderService } from '../aplication/character-use-case.interface';
import { GenderService } from '../aplication/character-use-case.service';
import { GenderRepositoryModelObj } from './graphql/output/character.type';
import { SaveGenderRepositoryModeInput, UpdateGenderRepositoryModeInput } from './graphql/input/create-character.input';
import { GenderResponseObj, GendersResponseObj } from './graphql/output/character-response.type';



@Resolver(() => GenderRepositoryModelObj)
export class CharacterResolver {
  constructor(
    @Inject(GenderService) private genderService: UseCaseGenderService,
  ) { }

  @Mutation(() => GenderRepositoryModelObj, { name: 'createGender' })
  createCharacter(@Args('createCharacterInput') createCharacterInput: SaveGenderRepositoryModeInput) {
    return this.genderService.createGender(createCharacterInput);
  }

  @Query(() => GendersResponseObj, { name: 'get_all_gender' })
  findAll() {
    return this.genderService.getAllGender();
  }

  @Query(() => GenderResponseObj, { name: 'get_one_genser' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.genderService.getGenderById(id);
  }

  @Mutation(() => GenderRepositoryModelObj, { name: 'updateGender' })
  updateCharacter(@Args('updateGenderInput') updateGenderInput: UpdateGenderRepositoryModeInput) {
    return this.genderService.updateGenderById(updateGenderInput);
  }

  @Mutation(() => GenderRepositoryModelObj, { name: 'removeGender' })
  removeCharacter(@Args('id', { type: () => String }) id: string) {
    return this.genderService.deleteGenderById(id);
  }
}
