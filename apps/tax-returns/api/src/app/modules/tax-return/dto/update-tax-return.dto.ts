import { Field, InputType, Int } from '@nestjs/graphql';
import { CreateNestedRevenueInput } from '../../revenue/dto/create-nested-revenue.input';
import { UpdateRevenueInput } from '../../revenue/dto/update-revenue.input';

@InputType()
export class UpdateTaxReturnDto {
  @Field(() => [CreateNestedRevenueInput], { nullable: true })
  createRevenues?: CreateNestedRevenueInput[];

  @Field(() => [UpdateRevenueWithIdInput], { nullable: true })
  updateRevenues?: UpdateRevenueWithIdInput[];

  @Field(() => [Int], { nullable: true })
  deleteRevenueIds?: number[];
}

@InputType()
class UpdateRevenueWithIdInput extends UpdateRevenueInput {
  @Field(() => Int)
  declare id: number;
}
