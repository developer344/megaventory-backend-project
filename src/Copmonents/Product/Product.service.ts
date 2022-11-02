import { Injectable } from "@nestjs/common";
import { mvProduct, ProductUpdate } from "src/dto/Interfaces";
import { mvBackendUrl, MYAPIKEY } from "src/Utils/config";
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from "rxjs";

@Injectable()
export class ProductService {
    constructor(private readonly httpService: HttpService) { }
    createUpdate(newProd: mvProduct): ProductUpdate {
        const retProd: ProductUpdate = {
            APIKEY: MYAPIKEY,
            mvProduct: newProd,
            mvRecordAction: (newProd.ProductID === undefined ? 'Insert' : 'Update'),
        }
        return retProd;
    }

    async pushProduct(productUpdate: ProductUpdate): Promise<any> {

        const responseData = await lastValueFrom(
            this.httpService.post(mvBackendUrl, productUpdate, null).pipe(
                map((response) => {
                    return response.data;
                }),
            ),
        );
        return responseData;
    }

}