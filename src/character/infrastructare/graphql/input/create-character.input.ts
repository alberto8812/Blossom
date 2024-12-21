import { Field, InputType, ObjectType } from '@nestjs/graphql';
@InputType()
export class ISaveEmployesRepositoryModeInput {
    @Field()
    name: string;

    @Field()
    status: string;

    @Field()
    img: string;
}