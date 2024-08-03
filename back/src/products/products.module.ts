import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { SupabaseService } from '../supabase/supabase.service';

@Module({
  controllers: [ProductsController],
  providers: [SupabaseService],
})
export class ProductsModule {}