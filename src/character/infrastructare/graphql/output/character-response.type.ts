import { Field, ObjectType } from "@nestjs/graphql";
import { basicResponseApiOutput } from "src/common";
import { CharacterRepositoryModelObj } from "./character.type";

@ObjectType()
export class CharacterResponseObj extends basicResponseApiOutput {

    @Field(() => [CharacterRepositoryModelObj], { defaultValue: [] })
    data: CharacterRepositoryModelObj[] | CharacterRepositoryModelObj;

}