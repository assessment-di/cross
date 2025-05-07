import { Field, InputType, Int } from '@nestjs/graphql';
import { CreateRevenueInput } from 'apps/tax-returns/api/src/app/modules/revenue/dto/create-revenue.input';
import { UpdateRevenueInput } from '../../revenue/dto/update-revenue.input';

@InputType()
export class UpdateTaxReturnDto {
  @Field(() => [CreateRevenueInput], { nullable: true })
  createRevenues?: CreateRevenueInput[];

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
