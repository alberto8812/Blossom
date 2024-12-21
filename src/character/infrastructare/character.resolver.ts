import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { Inject } from '@nestjs/common';
import { UseCaseCharacterService } from '../aplication/character-use-case.interface';
import { CharacterService } from '../aplication/character-use-case.service';
import { CharacterRepositoryModelObj } from './graphql/output/character.type';
import { ISaveEmployesRepositoryModeInput } from './graphql/input/create-character.input';



@Resolver(() => CharacterRepositoryModelObj)
export class CharacterResolver {
  constructor(
    @Inject(CharacterService) private characterService: UseCaseCharacterService,
  ) { }

  @Mutation(() => CharacterRepositoryModelObj)
  createCharacter(@Args('createCharacterInput') createCharacterInput: ISaveEmployesRepositoryModeInput) {
    return this.characterService.createCharacter('');
  }

  @Query(() => [CharacterRepositoryModelObj], { name: 'character' })
  findAll() {
    return this.characterService.getAllCharacter();
  }

  @Query(() => CharacterRepositoryModelObj, { name: 'character' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.characterService.getCharacterById();
  }

  @Mutation(() => CharacterRepositoryModelObj)
  updateCharacter(@Args('updateCharacterInput') updateCharacterInput: ISaveEmployesRepositoryModeInput) {
    return this.characterService.updateCharacterById();
  }

  @Mutation(() => CharacterRepositoryModelObj)
  removeCharacter(@Args('id', { type: () => Int }) id: number) {
    return this.characterService.deleteCharacerById(id);
  }
}
