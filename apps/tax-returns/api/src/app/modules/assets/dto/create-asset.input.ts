import { Field, InputType } from '@nestjs/graphql';
import { AssetType } from '../assets.model';
import { AssetDescriptionDto } from './asset-description.dto';

@InputType()
export class CreateAssetInput {
  @Field(() => AssetType)
  declare type: AssetType;

  @Field(() => AssetDescriptionDto)
  declare description: AssetDescriptionDto;
}
