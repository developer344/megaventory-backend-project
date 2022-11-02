import { Injectable } from "@nestjs/common";
import { mvSupplierClient, SupplierClientUpdate } from "src/dto/Interfaces";
import { mvBackendUrl, MYAPIKEY } from "src/Utils/config";
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from "rxjs";

@Injectable()
export class SupplierClientService {
    constructor(private readonly httpService: HttpService) { }

    createUpdate(supplierClient: mvSupplierClient): SupplierClientUpdate {
        const retSupplierClient: SupplierClientUpdate = {
            APIKEY: MYAPIKEY,
            mvSupplierClient: supplierClient,
            mvRecordAction: (supplierClient.SupplierClientID === undefined ? 'Insert' : 'Update'),
        }
        return retSupplierClient;
    }

    async pushSupplierClient(supplierClientUpdate: SupplierClientUpdate): Promise<any> {

        const responseData = await lastValueFrom(
            this.httpService.post(mvBackendUrl + '/SupplierClient/SupplierClientUpdate', supplierClientUpdate, null).pipe(
                map((response) => {
                    return response.data;
                }),
            ),
        );
        return responseData;
    }

}