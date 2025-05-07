import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Optional } from 'sequelize/types';
import {
  Field,
  ID,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { TaxReturn } from '../tax-return/tax-return.model';
import { DebtDescriptionItemDto } from './dto/debt-description.dto';

export enum DebtType {
  INTEREST_EXPENSES = 'INTEREST_EXPENSES',
  OTHER = 'OTHER',
}

registerEnumType(DebtType, {
  name: 'DebtType',
});

@ObjectType()
class DebtDescriptionItem {
  @Field(() => String)
  declare title: string;

  @Field(() => String)
  declare title_value: string;

  @Field(() => Number)
  declare index: number;

  @Field(() => String)
  declare currency: string;

  @Field(() => Number)
  declare value: number;
}

export interface DebtAttributes {
  id: number;
  taxReturnId: number;
  type: DebtType;
  description: DebtDescriptionItemDto[];
  createdAt: Date;
  updatedAt: Date;
}

interface DebtCreationAttributes
  extends Optional<DebtAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

@ObjectType()
@Table({ tableName: 'debts', underscored: true })
export class Debt extends Model<
  DebtAttributes,
  DebtCreationAttributes
> {
  @Field(() => ID)
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Field(() => ID)
  @ForeignKey(() => TaxReturn)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare taxReturnId: number;

  @Field(() => TaxReturn)
  @BelongsTo(() => TaxReturn)
  declare taxReturn: TaxReturn;

  @Field(() => DebtType)
  @Column({
    type: DataType.ENUM(...Object.values(DebtType)),
    allowNull: false,
  })
  declare type: DebtType;

  @Field(() => [DebtDescriptionItem])
  @Column({
    type: DataType.JSON,
    allowNull: false,
    defaultValue: [],
  })
  declare description: DebtDescriptionItemDto[];

  @Field(() => Date)
  @CreatedAt
  @Column({
    field: 'created_at',
  })
  declare createdAt: Date;

  @Field(() => Date)
  @UpdatedAt
  @Column({
    field: 'updated_at',
  })
  declare updatedAt: Date;
} 