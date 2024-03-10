import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.user.findMany();
  }

  create(dto: CreateUserDto) {
    return this.prisma.user.create({ data: dto });
  }

  async getCart(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    return user.cart;
  }

  async addCart(id: string, productId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    const cart = user.cart;
    cart.push(Number(productId));
    return await this.prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        cart: cart,
      },
    });
  }
}
