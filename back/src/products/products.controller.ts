import { Controller, Get, UseGuards } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/products/v1/1.0.0/getall')
export class ProductsController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllProducts() {
    return this.supabaseService.getAllProducts();
  }
}