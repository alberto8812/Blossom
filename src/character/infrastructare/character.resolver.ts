import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { Inject } from '@nestjs/common';
import { UseCaseCharacterService } from '../aplication/character-use-case.interface';
import { CharacterService } from '../aplication/character-use-case.service';
import { CharacterRepositoryModelObj } from './graphql/output/character.type';
import { SaveCharacterRepositoryModeInput, UpdateCharacterRepositoryModeInput } from './graphql/input/create-character.input';



@Resolver(() => CharacterRepositoryModelObj)
export class CharacterResolver {
  constructor(
    @Inject(CharacterService) private characterService: UseCaseCharacterService,
  ) { }

  @Mutation(() => CharacterRepositoryModelObj)
  createCharacter(@Args('createCharacterInput') createCharacterInput: SaveCharacterRepositoryModeInput) {
    return this.characterService.createCharacter(createCharacterInput);
  }

  @Query(() => [CharacterRepositoryModelObj], { name: 'character' })
  findAll() {
    return this.characterService.getAllCharacter();
  }

  @Query(() => CharacterRepositoryModelObj, { name: 'character' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.characterService.getCharacterById(id);
  }

  @Mutation(() => CharacterRepositoryModelObj)
  updateCharacter(@Args('updateCharacterInput') updateCharacterInput: UpdateCharacterRepositoryModeInput) {
    return this.characterService.updateCharacterById(updateCharacterInput);
  }

  @Mutation(() => CharacterRepositoryModelObj)
  removeCharacter(@Args('id', { type: () => String }) id: string) {
    return this.characterService.deleteCharacerById(id);
  }
}
