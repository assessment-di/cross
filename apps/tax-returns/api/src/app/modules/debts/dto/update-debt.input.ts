import { Field, InputType } from '@nestjs/graphql';
import { DebtType } from '../debts.model';
import { DebtDescriptionItemDto } from './debt-description.dto';

@InputType()
export class UpdateDebtInput {
  @Field(() => DebtType, { nullable: true })
  type?: DebtType;

  @Field(() => [DebtDescriptionItemDto], { nullable: true })
  description?: DebtDescriptionItemDto[];
}
