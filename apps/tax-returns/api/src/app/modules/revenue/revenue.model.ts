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
  Float,
  ID,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { TaxReturn } from '../tax-return/tax-return.model';

export enum RevenueType {
  SALARY_AND_PAYMENTS = 'SALARY_AND_PAYMENTS',
  VEHICLE_ALLOWANCE = 'VEHICLE_ALLOWANCE',
  PENSION_PAYMENTS = 'PENSION_PAYMENTS',
}

export enum RevenueCurrency {
  ISK = 'ISK',
}

registerEnumType(RevenueType, {
  name: 'RevenueType',
});

registerEnumType(RevenueCurrency, {
  name: 'RevenueCurrency',
});

export interface RevenueAttributes {
  id: number;
  taxReturnId: number;
  type: RevenueType;
  description?: string;
  currency: RevenueCurrency;
  value: number;
  createdAt: Date;
  updatedAt: Date;
}

interface RevenueCreationAttributes
  extends Optional<RevenueAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

@ObjectType()
@Table({ tableName: 'revenues', underscored: true })
export class Revenue extends Model<
  RevenueAttributes,
  RevenueCreationAttributes
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

  @Field(() => RevenueType)
  @Column({
    type: DataType.ENUM(...Object.values(RevenueType)),
    allowNull: false,
  })
  declare type: RevenueType;

  @Field(() => String, { nullable: true })
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare description: string;

  @Field(() => RevenueCurrency)
  @Column({
    type: DataType.ENUM(...Object.values(RevenueCurrency)),
    allowNull: false,
    defaultValue: RevenueCurrency.ISK,
  })
  declare currency: RevenueCurrency;

  @Field(() => Float)
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare value: number;

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
