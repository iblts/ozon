import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateSellerDto } from './seller.dto';
import { SellerService } from './seller.service';

@Controller('sellers')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Get()
  getAll() {
    return this.sellerService.getAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: CreateSellerDto) {
    return this.sellerService.create(dto);
  }
}
