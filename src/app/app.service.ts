import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { mvDiscount, mvInventoryLocation, mvProduct, mvSalesOrder, mvSalesOrderRow, mvSupplierClient, mvTax } from 'src/dto/Interfaces';
import { BACKEND_URL } from 'src/Utils/config';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }
  getHello(): string {
    return 'Hello World!';
  }

  async addProduct(): Promise<mvProduct | null> {
    var insProduct: mvProduct = {
      ProductSKU: '1112256',
      ProductDescription: 'Nike shoes',
      ProductSellingPrice: 99.99,
      ProductPurchasePrice: 49.99,
    }
    console.log('test88')
    const response = await lastValueFrom(this.httpService.post(BACKEND_URL + '/Product/ProductUpdate', insProduct, null).pipe(
      map((response) => {
        return response.data;
      }),
    ))
    console.log('test89')
    if (response.ResponseStatus.ErrorCode === '0')
      return response.mvProduct;
    else
      if (response.ResponseStatus.ErrorCode === '500' && response.InternalErrorCode === 'ProductSKUAlreadyExists') {
        insProduct.ProductID = response.entityID;
        return insProduct;
      }
      else
        return null;
  }

  async addTax(): Promise<mvTax | null> {
    const insTax: mvTax = {
      TaxName: 'VAT',
      TaxDescription: 'VAT GR',
      TaxValue: 24
    }
    const response = await lastValueFrom(this.httpService.post(BACKEND_URL + '/Tax/TaxUpdate', insTax, null).pipe(
      map((response) => {
        return response.data;
      }),
    ))
    console.log(response);
    if (response.ResponseStatus.ErrorCode === '0')
      return response.mvTax;
    else
      if (response.ResponseStatus.ErrorCode === '500' && response.InternalErrorCode === 'TaxNameValueAlreadyExists') {
        insTax.TaxID = response.entityID;
        return insTax;
      }
      else
        return null;
  }

  async addDiscount(): Promise<mvDiscount | null> {
    const insDiscount: mvDiscount = {
      DiscountName: ' Loyalty ',
      DiscountDescription: ' Loyalty Customer Discount ',
      DiscountValue: 50
    }
    const response = await lastValueFrom(this.httpService.post(BACKEND_URL + '/Discount/DiscountUpdate', insDiscount, null).pipe(
      map((response) => {
        return response.data;
      }),
    ))
    console.log(response)
    if (response.ResponseStatus.ErrorCode === '0')
      return response.mvDiscount;
    else
      if (response.ResponseStatus.ErrorCode === '500' && response.InternalErrorCode === 'DiscountNameValueAlreadyExists') {
        insDiscount.DiscountID = response.entityID;
        return insDiscount;
      }
      else
        return null;
  }

  async addInventoryLocation(): Promise<mvInventoryLocation | null> {
    const insInventoryLocation: mvInventoryLocation = {
      InventoryLocationAbbreviation: 'Test1',
      InventoryLocationName: 'Test1 Project Location',
      InventoryLocationAddress: 'Example 20, Athens'
    }
    const response = await lastValueFrom(this.httpService.post(BACKEND_URL + '/InventoryLocation/InventoryLocationUpdate', insInventoryLocation, null).pipe(
      map((response) => {
        return response.data;
      }),
    ))
    console.log(response);
    if (response.ResponseStatus.ErrorCode === '0')
      return response.mvInventoryLocation;
    else {
      if (response.ResponseStatus.ErrorCode === '500' && response.InternalErrorCode === 'LocationNameOrAbrevAlreadyExists') {
        insInventoryLocation.InventoryLocationID = response.entityID;
        return insInventoryLocation;
      }
      else
        return null;
    }
  }

  async addSupplierClient(): Promise<mvSupplierClient | null> {
    const insSupplierClient: mvSupplierClient = {
      SupplierClientName: 'babis',
      SupplierClientEmail: 'babis@exampletest.com',
      SupplierClientShippingAddress1: 'Example 8, Athens',
      SupplierClientPhone1: '1235698967'
    }
    const response = await lastValueFrom(this.httpService.post(BACKEND_URL + '/SupplierClient/SupplierClientUpdate', insSupplierClient, null).pipe(
      map((response) => {
        return response.data;
      }),
    ))
    console.log(response);
    if (response.ResponseStatus.ErrorCode === '0')
      return response.mvSupplierClient;
    else
      if (response.ResponseStatus.ErrorCode === '500' && response.InternalErrorCode === 'SupplierClientNameAlreadyExists') {
        insSupplierClient.SupplierClientID = response.entityID;
        return insSupplierClient;
      }
      else
        return null;
  }

  async addSalesOrder(product: mvProduct, supplierClient: mvSupplierClient, tax: mvTax, discount: mvDiscount, inventoryLocation: mvInventoryLocation): Promise<mvSalesOrder | null> {
    const newSalesOrder: mvSalesOrder = {
      SalesOrderClientID: supplierClient.SupplierClientID,
      SalesOrderTypeId: 3,
      SalesOrderInventoryLocationID: inventoryLocation.InventoryLocationID,
      SalesOrderStatus: 'Pending',
      SalesOrderDetails: [{
        SalesOrderRowProductSKU: product.ProductSKU,
        SalesOrderRowQuantity: 1,
        SalesOrderRowShippedQuantity: 0,
        SalesOrderRowInvoicedQuantity: 0,
        SalesOrderRowUnitPriceWithoutTaxOrDiscount: product.ProductSellingPrice,
        SalesOrderRowTaxID: tax.TaxID,
        SalesOrderRowDiscountID: discount.DiscountID,
      }],
    }
    const response = await lastValueFrom(this.httpService.post(BACKEND_URL + '/SalesOrder/SalesOrderUpdate', newSalesOrder, null).pipe(
      map((response) => {
        return response.data;
      }),
    ))
    console.log(response);
    if (response.ResponseStatus.ErrorCode === '0')
      return response.mvSalesOrder;
    else
      return null;
  }

}
