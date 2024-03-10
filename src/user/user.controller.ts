import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get(':id/cart')
  getCart(@Param('id') id: string) {
    return this.userService.getCart(id);
  }

  @Post(':id/cart/:productId')
  addCart(@Param('id') id: string, @Param('productId') productId: string) {
    return this.userService.addCart(id, productId);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
}
