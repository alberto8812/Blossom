import { Field, ObjectType } from "@nestjs/graphql";
import { basicResponseApiOutput } from "src/common";
import { OriginRepositoryModelObj } from "./Origin.type";


@ObjectType()
export class CharactersResponseObj extends basicResponseApiOutput {

    @Field(() => [OriginRepositoryModelObj], { defaultValue: [] })
    data: OriginRepositoryModelObj[];

}

@ObjectType()
export class CharacterResponseObj extends basicResponseApiOutput {

    @Field(() => OriginRepositoryModelObj, { nullable: true })
    data: OriginRepositoryModelObj;

}