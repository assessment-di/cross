import { Field, InputType, Int } from '@nestjs/graphql';
import { CreateRevenueInput } from '../../revenue/dto/create-revenue.input';
import { UpdateRevenueInput } from '../../revenue/dto/update-revenue.input';
import { CreateAssetInput } from '../../assets/dto/create-asset.input';
import { UpdateAssetInput } from '../../assets/dto/update-asset.input';
import { CreateDebtInput } from '../../debts/dto/create-debt.input';
import { UpdateDebtInput } from '../../debts/dto/update-debt.input';

@InputType()
export class UpdateTaxReturnDto {
  @Field(() => [CreateRevenueInput], { nullable: true })
  createRevenues?: CreateRevenueInput[];

  @Field(() => [UpdateRevenueWithIdInput], { nullable: true })
  updateRevenues?: UpdateRevenueWithIdInput[];

  @Field(() => [Int], { nullable: true })
  deleteRevenueIds?: number[];

  @Field(() => [CreateAssetInput], { nullable: true })
  createAssets?: CreateAssetInput[];

  @Field(() => [UpdateAssetWithIdInput], { nullable: true })
  updateAssets?: UpdateAssetWithIdInput[];

  @Field(() => [Int], { nullable: true })
  deleteAssetIds?: number[];

  @Field(() => [CreateDebtInput], { nullable: true })
  createDebts?: CreateDebtInput[];

  @Field(() => [UpdateDebtWithIdInput], { nullable: true })
  updateDebts?: UpdateDebtWithIdInput[];

  @Field(() => [Int], { nullable: true })
  deleteDebtIds?: number[];
}

@InputType()
class UpdateRevenueWithIdInput extends UpdateRevenueInput {
  @Field(() => Int)
  declare id: number;
}

@InputType()
class UpdateAssetWithIdInput extends UpdateAssetInput {
  @Field(() => Int)
  declare id: number;
}

@InputType()
class UpdateDebtWithIdInput extends UpdateDebtInput {
  @Field(() => Int)
  declare id: number;
}
