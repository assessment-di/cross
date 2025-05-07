import { Field, InputType } from '@nestjs/graphql';
import { DebtType } from '../debts.model';
import { DebtDescriptionDto } from './debt-description.dto';

@InputType()
export class UpdateDebtInput {
  @Field(() => DebtType, { nullable: true })
  type?: DebtType;

  @Field(() => DebtDescriptionDto, { nullable: true })
  description?: DebtDescriptionDto;
} 