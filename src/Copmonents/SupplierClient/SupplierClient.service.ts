import { Injectable } from "@nestjs/common";
import { mvSupplierClient, SupplierClientUpdate } from "src/dto/Interfaces";
import { mvBackendUrl, MYAPIKEY } from "src/Utils/config";
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from "rxjs";

@Injectable()
export class SupplierClientService {
    constructor(private readonly httpService: HttpService) { }

    createUpdate(suppierClient: mvSupplierClient): SupplierClientUpdate {
        const retProd: SupplierClientUpdate = {
            APIKEY: MYAPIKEY,
            mvSupplierClient: suppierClient,
            mvRecordAction: (suppierClient.SupplierClientID === undefined ? 'Insert' : 'Update'),
        }
        return retProd;
    }

    async pushSupplierClient(supplierClientUpdate: SupplierClientUpdate): Promise<any> {

        const responseData = await lastValueFrom(
            this.httpService.post(mvBackendUrl, supplierClientUpdate, null).pipe(
                map((response) => {
                    return response.data;
                }),
            ),
        );
        return responseData;
    }

}