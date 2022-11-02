import { Injectable } from "@nestjs/common";
import { mvSalesOrder, SalesOrderUpdate } from "src/dto/Interfaces";
import { mvBackendUrl, MYAPIKEY } from "src/Utils/config";
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from "rxjs";

@Injectable()
export class SalesOrderService {
    constructor(private readonly httpService: HttpService) { }
    createUpdate(newSalesOrder: mvSalesOrder): SalesOrderUpdate {
        const retProd: SalesOrderUpdate = {
            APIKEY: MYAPIKEY,
            mvSalesOrder: newSalesOrder,
            mvRecordAction: 'Insert',
        }
        return retProd;
    }

    async pushSalesOrder(SalesOrderUpdate: SalesOrderUpdate): Promise<any> {

        console.log(SalesOrderUpdate)
        const responseData = await lastValueFrom(
            this.httpService.post(mvBackendUrl + '/SalesOrder/SalesOrderUpdate', SalesOrderUpdate, null).pipe(
                map((response) => {
                    return response.data;
                }),
            ),
        );
        return responseData;
    }

}