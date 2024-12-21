import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { Inject } from '@nestjs/common';
import { UseCaseCharacterService } from '../aplication/character-use-case.interface';
import { CharacterService } from '../aplication/character-use-case.service';
import { CharacterRepositoryModelObj } from './graphql/output/Origin.type';
import { SaveCharacterRepositoryModeInput, UpdateCharacterRepositoryModeInput } from './graphql/input/create-character.input';
import { CharacterResponseObj, CharactersResponseObj } from './graphql/output/character-response.type';



@Resolver(() => CharacterRepositoryModelObj)
export class OriginResolver {
  constructor(
    @Inject(CharacterService) private characterService: UseCaseCharacterService,
  ) { }

  @Mutation(() => CharacterRepositoryModelObj, { name: 'createCharacter' })
  createOrigin(@Args('createCharacterInput') createOirignInput: SaveCharacterRepositoryModeInput) {
    return this.characterService.createCharacter(createCharacterInput);
  }

  @Query(() => CharactersResponseObj, { name: 'get_all_character' })
  findAll() {
    return this.characterService.getAllCharacter();
  }

  @Query(() => CharacterResponseObj, { name: 'get_one_character' })
  findOne(@Args('id', { type: () => String }) id: string) {
    console.log(id);
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
