import { Field, InputType } from '@nestjs/graphql';
import { DebtType } from '../debts.model';
import { DebtDescriptionDto } from './debt-description.dto';

@InputType()
export class CreateDebtInput {
  @Field(() => DebtType)
  declare type: DebtType;

  @Field(() => DebtDescriptionDto)
  declare description: DebtDescriptionDto;
} 