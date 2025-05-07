import { Field, Float, InputType } from '@nestjs/graphql';
import { RevenueCurrency, RevenueType } from '../revenue.model';

@InputType()
export class UpdateRevenueInput {
  @Field(() => RevenueType, { nullable: true })
  type?: RevenueType;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => RevenueCurrency, { nullable: true })
  currency?: RevenueCurrency;

  @Field(() => Float, { nullable: true })
  value?: number;
}
