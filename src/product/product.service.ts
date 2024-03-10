import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.product.findMany();
  }

  getOne(id: string) {
    return this.prisma.product.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        seller: true,
      },
    });
  }

  create(dto: CreateProductDto) {
    return this.prisma.product.create({ data: dto });
  }

  delete(id: string) {
    return this.prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
