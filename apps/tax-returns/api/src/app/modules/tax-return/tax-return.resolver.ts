import { v4 as uuidv4 } from 'uuid';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaxReturn } from './tax-return.model';
import { CreateTaxReturnDto } from './dto/create-tax-return.dto';
import { TaxReturnService } from './tax-return.service';
import { UpdateTaxReturnDto } from './dto/update-tax-return.dto';
import { AuthGuard } from '../../common/guards/auth.guard';
import { ResourceOwner } from '../../common/decorators/resource-owner.decorator';
import { UseGuards } from '@nestjs/common';

@Resolver(() => TaxReturn)
@UseGuards(AuthGuard)
export class TaxReturnResolver {
  constructor(private readonly taxReturnService: TaxReturnService) {}

  @Query(() => [TaxReturn])
  async taxReturns(@ResourceOwner() userUuid: string): Promise<TaxReturn[]> {
    return this.taxReturnService.findAll(userUuid);
  }

  @Query(() => TaxReturn)
  async taxReturn(
    @Args('id', { type: () => ID }) id: number,
    @ResourceOwner() userUuid: string,
  ): Promise<TaxReturn> {
    const taxReturn = await this.taxReturnService.findOne(id);

    if (taxReturn.userUuid !== userUuid) {
      // TODO userUuid is given from mockAuth, we're assuming it's an authorized user and comment next check
      // throw new ForbiddenException('Not authorized to access this tax return');
    }
    return taxReturn;
  }

  @Mutation(() => TaxReturn)
  async createTaxReturn(
    @Args('input') createTaxReturnDto: CreateTaxReturnDto,
  ): Promise<TaxReturn> {
    // TODO When implementing real authentication, userUuid should be given from the authenticated user. For demonstration purposes using uuidv4()
    return this.taxReturnService.create({
      ...createTaxReturnDto,
      userUuid: uuidv4(),
    });
  }

  @Mutation(() => TaxReturn)
  async updateTaxReturn(
    @Args('id', { type: () => ID }) id: number,
    @Args('input') updateTaxReturnDto: UpdateTaxReturnDto,
    @ResourceOwner() userUuid: string,
  ): Promise<TaxReturn> {
    const taxReturn = await this.taxReturnService.findOne(id);
    if (taxReturn.userUuid !== userUuid) {
      // TODO userUuid is given from mockAuth, we're assuming it's an authorized user and comment next check
      // throw new ForbiddenException('Not authorized to update this tax return');
    }

    return this.taxReturnService.update(id, updateTaxReturnDto);
  }

  @Mutation(() => Boolean)
  async removeTaxReturn(
    @Args('id', { type: () => ID }) id: number,
    @ResourceOwner() userUuid: string,
  ): Promise<boolean> {
    const taxReturn = await this.taxReturnService.findOne(id);
    if (taxReturn.userUuid !== userUuid) {
      // TODO userUuid is given from mockAuth, we're assuming it's an authorized user and comment next check
      // throw new ForbiddenException('Not authorized to delete this tax return');
    }

    await this.taxReturnService.remove(id);
    return true;
  }
}
