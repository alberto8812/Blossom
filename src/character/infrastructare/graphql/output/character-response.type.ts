import { Field, ObjectType } from "@nestjs/graphql";
import { basicResponseApiOutput } from "src/common";
import { CharacterRepositoryModelObj } from "./character.type";
import { object } from "joi";

@ObjectType()
export class CharactersResponseObj extends basicResponseApiOutput {

    @Field(() => [CharacterRepositoryModelObj], { defaultValue: [] })
    data: CharacterRepositoryModelObj[];

}

@ObjectType()
export class CharacterResponseObj extends basicResponseApiOutput {

    @Field(() => CharacterRepositoryModelObj, { nullable: true })
    data: CharacterRepositoryModelObj;

}