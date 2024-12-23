import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { Inject } from '@nestjs/common';
import { UseCaseCharacterService } from '../aplication/character-use-case.interface';
import { CharacterService } from '../aplication/character-use-case.service';
import { CharacterRepositoryModelObj } from './graphql/output/character.type';
import { SaveCharacterRepositoryModeInput, UpdateCharacterRepositoryModeInput } from './graphql/input/create-character.input';
import { CharacterResponseObj, CharactersResponseObj } from './graphql/output/character-response.type';
import { SearchCharacterArgs } from './graphql/args/search.characters';



@Resolver(() => CharacterRepositoryModelObj)
export class CharacterResolver {
  constructor(
    @Inject(CharacterService) private characterService: UseCaseCharacterService,
  ) { }

  @Mutation(() => CharacterRepositoryModelObj, { name: 'createCharacter' })
  createCharacter(@Args('createCharacterInput') createCharacterInput: SaveCharacterRepositoryModeInput) {
    return this.characterService.createCharacter(createCharacterInput);
  }

  @Query(() => CharactersResponseObj, { name: 'get_all_character' })
  findAll(
    @Args() searchCharacterArgs: SearchCharacterArgs
  ) {
    return this.characterService.getAllCharacter(searchCharacterArgs);
  }

  @Query(() => CharacterResponseObj, { name: 'get_one_character' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.characterService.getCharacterById(id);
  }

  @Mutation(() => CharacterRepositoryModelObj, { name: 'updateCharacter' })
  updateCharacter(@Args('updateCharacterInput') updateCharacterInput: UpdateCharacterRepositoryModeInput) {
    return this.characterService.updateCharacterById(updateCharacterInput);
  }

  @Mutation(() => CharacterRepositoryModelObj, { name: 'removeCharacter' })
  removeCharacter(@Args('id', { type: () => String }) id: string) {
    return this.characterService.deleteCharacerById(id);
  }
}
