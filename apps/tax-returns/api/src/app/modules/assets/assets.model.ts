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
import { AssetDescriptionItemDto } from './dto/asset-description.dto';

export enum AssetType {
  REAL_ESTATE = 'REAL_ESTATE',
  CARS = 'CARS',
}

registerEnumType(AssetType, {
  name: 'AssetType',
});

@ObjectType()
class AssetDescriptionItem {
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

export interface AssetAttributes {
  id: number;
  taxReturnId: number;
  type: AssetType;
  description: AssetDescriptionItemDto[];
  createdAt: Date;
  updatedAt: Date;
}

interface AssetCreationAttributes
  extends Optional<AssetAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

@ObjectType()
@Table({ tableName: 'assets', underscored: true })
export class Asset extends Model<
  AssetAttributes,
  AssetCreationAttributes
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

  @Field(() => AssetType)
  @Column({
    type: DataType.ENUM(...Object.values(AssetType)),
    allowNull: false,
  })
  declare type: AssetType;

  @Field(() => [AssetDescriptionItem])
  @Column({
    type: DataType.JSON,
    allowNull: false,
    defaultValue: [],
  })
  declare description: AssetDescriptionItemDto[];

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