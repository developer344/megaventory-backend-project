import { Injectable } from "@nestjs/common";
import { InventoryLocationUpdate, mvInventoryLocation, mvSupplierClient, SupplierClientUpdate } from "src/dto/Interfaces";
import { mvBackendUrl, MYAPIKEY } from "src/Utils/config";
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from "rxjs";

@Injectable()
export class InventoryLocationService {
    constructor(private readonly httpService: HttpService) { }

    createUpdate(inventoryLocation: mvInventoryLocation): InventoryLocationUpdate {
        const retProd: InventoryLocationUpdate = {
            APIKEY: MYAPIKEY,
            mvInventoryLocation: inventoryLocation,
            mvRecordAction: (inventoryLocation.InventoryLocationID === undefined ? 'Insert' : 'Update'),
        }
        return retProd;
    }

    async pushInventoryLocation(inventoryLocationUpdate: InventoryLocationUpdate): Promise<any> {

        const responseData = await lastValueFrom(
            this.httpService.post(mvBackendUrl + '/InventoryLocation/InventoryLocationUpdate', inventoryLocationUpdate, null).pipe(
                map((response) => {
                    return response.data;
                }),
            ),
        );
        return responseData;
    }

}