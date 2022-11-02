import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { DiscountController } from 'src/Copmonents/Discound/Discount.controller';
import { DiscountService } from 'src/Copmonents/Discound/Discount.service';
import { InventoryLocationController } from 'src/Copmonents/InventoryLocation/InventoryLocation.controller';
import { InventoryLocationService } from 'src/Copmonents/InventoryLocation/InventoryLocation.service';
import { ProductController } from 'src/Copmonents/Product/Product.controller';
import { ProductService } from 'src/Copmonents/Product/Product.service';
import { SalesOrderController } from 'src/Copmonents/SalesOrder/SalesOrder.controller';
import { SalesOrderService } from 'src/Copmonents/SalesOrder/SalesOrder.service';
import { SupplierClientController } from 'src/Copmonents/SupplierClient/SupplierClient.controller';
import { SupplierClientService } from 'src/Copmonents/SupplierClient/SupplierClient.service';
import { TaxController } from 'src/Copmonents/Tax/Tax.controller';
import { TaxService } from 'src/Copmonents/Tax/Tax.service';
@Module({
  imports: [HttpModule],
  controllers: [AppController, DiscountController, InventoryLocationController, ProductController, SalesOrderController, SupplierClientController, TaxController],
  providers: [AppService, DiscountService, InventoryLocationService, ProductService, SalesOrderService, SupplierClientService, TaxService],
})
export class AppModule { }
