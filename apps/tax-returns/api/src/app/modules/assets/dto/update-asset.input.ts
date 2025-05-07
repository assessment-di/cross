import { Field, InputType } from '@nestjs/graphql';
import { AssetType } from '../assets.model';
import { AssetDescriptionDto } from './asset-description.dto';

@InputType()
export class UpdateAssetInput {
  @Field(() => AssetType, { nullable: true })
  type?: AssetType;

  @Field(() => AssetDescriptionDto, { nullable: true })
  description?: AssetDescriptionDto;
} 