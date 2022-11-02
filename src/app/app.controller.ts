import { HttpService } from '@nestjs/axios';
import { Controller, Get, Post } from '@nestjs/common';
import axios from 'axios';
import { lastValueFrom, map } from 'rxjs';
import { mvBackendUrl, MYAPIKEY } from 'src/Utils/config';
import { AppService } from './app.service';

@Controller('App')
export class AppController {

  constructor(private readonly appService: AppService,
    private readonly httpService: HttpService) { }

  @Get('runScript')
  async Script(): Promise<{ success: boolean }> {
    const response = await lastValueFrom(this.httpService.post(mvBackendUrl + '/APIKey/APIKeyGet', { APIKEY: MYAPIKEY })
      .pipe(map((response) => {
        return response.data;
      }),
      )
    )
    console.log(response);
    if (response.ResponseStatus.ErrorCode === '0') {
      console.log('success');
      const Product = await this.appService.addProduct();
      if (Product === null) {
        console.log('Error inserting product!!')
        return { success: false };
      } else {
        console.log("ProductId: ", Product.ProductID);
      }
      const Tax = await this.appService.addTax();
      if (Tax === null) {
        console.log('Error inserting tax!!')
        return { success: false };
      }
      else {
        console.log("TaxId: ", Tax.TaxID);
      }
      const Discount = await this.appService.addDiscount();
      if (Discount === null) {
        console.log('Error inserting discount!!')
        return { success: false };
      } else {
        console.log("DiscountId: ", Discount.DiscountID);
      }
      const InventoryLocation = await this.appService.addInventoryLocation();
      if (InventoryLocation === null) {
        console.log('Error inserting Inventory Location!!')
        return { success: false };
      } else {
        console.log("InventoryLocationId: ", InventoryLocation.InventoryLocationID);
      }
      const SupplierClient = await this.appService.addSupplierClient();
      if (SupplierClient === null) {
        console.log('Error inserting suuplier client!!')
        return { success: false };
      } else {
        console.log("SupplierClientId: ", SupplierClient.SupplierClientID);
      }
      const SalesOrder = await this.appService.addSalesOrder(Product, SupplierClient, Tax, Discount, InventoryLocation);
      console.log(SalesOrder);
      return { success: true };
    }
    return { success: false };
  }
}
