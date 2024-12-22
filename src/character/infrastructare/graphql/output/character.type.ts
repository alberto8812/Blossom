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
    species: string;

    @Field()
    img: string;

    @Field()
    originId: string;

    @Field()
    speciesId: string;
}