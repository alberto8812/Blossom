import { Field, ObjectType } from "@nestjs/graphql";
import { basicResponseApiOutput } from "src/common";
import { GenderRepositoryModelObj } from "./character.type";


@ObjectType()
export class GendersResponseObj extends basicResponseApiOutput {

    @Field(() => [GenderRepositoryModelObj], { defaultValue: [] })
    data: GenderRepositoryModelObj[];

}

@ObjectType()
export class GenderResponseObj extends basicResponseApiOutput {

    @Field(() => GenderRepositoryModelObj, { nullable: true })
    data: GenderRepositoryModelObj;

}