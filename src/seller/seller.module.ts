import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';

@Module({
  controllers: [SellerController],
  providers: [SellerService, PrismaService],
})
export class SellerModule {}
