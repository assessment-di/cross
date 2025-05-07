import { Field, InputType } from '@nestjs/graphql';
import { CreateRevenueInput } from '../../revenue/dto/create-revenue.input';

@InputType()
export class CreateTaxReturnDto {
  @Field(() => [CreateRevenueInput], { nullable: true })
  revenues?: CreateRevenueInput[];
}
