import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseService } from './supabase/supabase.service';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot(),
    AuthzModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    SupabaseService,
  ],
  exports: [SupabaseService],
})
export class AppModule { }
