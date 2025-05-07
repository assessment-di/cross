import { Field, InputType } from '@nestjs/graphql';
import { AssetType } from '../assets.model';
import { AssetDescriptionItemDto } from './asset-description.dto';

@InputType()
export class CreateAssetInput {
  @Field(() => AssetType)
  declare type: AssetType;

  @Field(() => [AssetDescriptionItemDto])
  declare description: AssetDescriptionItemDto[];
}
