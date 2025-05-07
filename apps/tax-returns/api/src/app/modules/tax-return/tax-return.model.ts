import {
  Column,
  CreatedAt,
  DataType,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Optional } from 'sequelize/types';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Revenue } from '../revenue/revenue.model';
import { Asset } from '../assets/assets.model';
import { Debt } from '../debts/debts.model';

export interface TaxReturnAttributes {
  id: number;
  userUuid: string;
  createdAt: Date;
  updatedAt: Date;
  revenues?: Revenue[];
  assets?: Asset[];
  debts?: Debt[];
}

interface TaxReturnCreationAttributes
  extends Optional<TaxReturnAttributes, 'id' | 'createdAt' | 'updatedAt'> {
  userUuid: string;
}

@ObjectType()
@Table({ tableName: 'tax_returns', underscored: true })
export class TaxReturn extends Model<
  TaxReturnAttributes,
  TaxReturnCreationAttributes
> {
  @Field(() => ID)
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Field(() => String)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    field: 'user_uuid',
  })
  declare userUuid: string;

  @Field(() => [Revenue], { nullable: true })
  @HasMany(() => Revenue)
  declare revenues: Revenue[];

  @Field(() => [Asset], { nullable: true })
  @HasMany(() => Asset)
  declare assets: Asset[];

  @Field(() => [Debt], { nullable: true })
  @HasMany(() => Debt)
  declare debts: Debt[];

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
