import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaxReturn } from './tax-return.model';
import { TaxReturnResolver } from './tax-return.resolver';
import { TaxReturnService } from './tax-return.service';
import { Revenue } from '../revenue/revenue.model';
import { Asset } from '../assets/assets.model';

@Module({
  imports: [SequelizeModule.forFeature([TaxReturn, Revenue, Asset])],
  providers: [TaxReturnResolver, TaxReturnService],
  exports: [SequelizeModule],
})
export class TaxReturnModule {}
