import { Field, InputType, ObjectType } from '@nestjs/graphql';
@InputType()
export class SaveGenderRepositoryModeInput {
    @Field()
    name: string;

    @Field()
    status: string;

    @Field()
    img: string;

    @Field()
    species: string;
}

@InputType()
export class UpdateGenderRepositoryModeInput extends SaveGenderRepositoryModeInput {
    @Field()
    id: string;
}