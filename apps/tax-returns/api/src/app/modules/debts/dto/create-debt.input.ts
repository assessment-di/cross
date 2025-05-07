import { Field, InputType } from '@nestjs/graphql';
import { DebtType } from '../debts.model';
import { DebtDescriptionItemDto } from './debt-description.dto';

@InputType()
export class CreateDebtInput {
  @Field(() => DebtType)
  declare type: DebtType;

  @Field(() => [DebtDescriptionItemDto])
  declare description: DebtDescriptionItemDto[];
}
