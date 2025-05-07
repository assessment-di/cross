import { Field, InputType } from '@nestjs/graphql';
import { CreateRevenueInput } from '../../revenue/dto/create-revenue.input';
import { CreateAssetInput } from '../../assets/dto/create-asset.input';

@InputType()
export class CreateTaxReturnDto {
  @Field(() => [CreateRevenueInput], { nullable: true })
  revenues?: CreateRevenueInput[];

  @Field(() => [CreateAssetInput], { nullable: true })
  assets?: CreateAssetInput[];
}
