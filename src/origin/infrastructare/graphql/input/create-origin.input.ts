import { Field, InputType, ObjectType } from '@nestjs/graphql';
@InputType()
export class SaveOriginRepositoryModeInput {
    @Field()
    name: string;
}

@InputType()
export class UpdateOriginRepositoryModeInput extends SaveOriginRepositoryModeInput {
    @Field()
    id: string;
}