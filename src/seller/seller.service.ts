import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSellerDto } from './seller.dto';

@Injectable()
export class SellerService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.seller.findMany();
  }

  create(dto: CreateSellerDto) {
    return this.prisma.seller.create({ data: dto });
  }
}
