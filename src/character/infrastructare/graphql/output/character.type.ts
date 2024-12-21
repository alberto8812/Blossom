import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class CharacterRepositoryModelObj {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    status: string;

    @Field()
    img: string;
}