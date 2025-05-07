import { Field, InputType } from '@nestjs/graphql';
import { AssetType } from '../assets.model';
import { AssetDescriptionItemDto } from './asset-description.dto';

@InputType()
export class UpdateAssetInput {
  @Field(() => AssetType, { nullable: true })
  type?: AssetType;

  @Field(() => [AssetDescriptionItemDto], { nullable: true })
  description?: AssetDescriptionItemDto[];
}
