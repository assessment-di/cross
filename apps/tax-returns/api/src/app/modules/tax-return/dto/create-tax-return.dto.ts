import { Field, InputType } from '@nestjs/graphql';
import { CreateRevenueInput } from '../../revenue/dto/create-revenue.input';
import { CreateAssetInput } from '../../assets/dto/create-asset.input';
import { CreateDebtInput } from '../../debts/dto/create-debt.input';

@InputType()
export class CreateTaxReturnInput {
  @Field(() => [CreateRevenueInput], { nullable: true })
  revenues?: CreateRevenueInput[];

  @Field(() => [CreateAssetInput], { nullable: true })
  assets?: CreateAssetInput[];

  @Field(() => [CreateDebtInput], { nullable: true })
  debts?: CreateDebtInput[];
}
