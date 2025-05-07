import { Field, InputType } from '@nestjs/graphql';
import { CreateNestedRevenueInput } from '../../revenue/dto/create-nested-revenue.input';

@InputType()
export class CreateTaxReturnDto {
  @Field(() => [CreateNestedRevenueInput], { nullable: true })
  revenues?: CreateNestedRevenueInput[];
}
