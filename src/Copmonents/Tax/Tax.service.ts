import { Injectable } from "@nestjs/common";
import { mvTax, TaxUpdate } from "src/dto/Interfaces";
import { mvBackendUrl, MYAPIKEY } from "src/Utils/config";
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from "rxjs";

@Injectable()
export class TaxService {
    constructor(private readonly httpService: HttpService) { }
    createUpdate(newTax: mvTax): TaxUpdate {
        const retProd: TaxUpdate = {
            APIKEY: MYAPIKEY,
            mvTax: newTax,
            mvRecordAction: (newTax.TaxID === undefined ? 'Insert' : 'Update'),
        }
        return retProd;
    }

    async pushTax(TaxUpdate: TaxUpdate): Promise<any> {

        const responseData = await lastValueFrom(
            this.httpService.post(mvBackendUrl + '/Tax/TaxUpdate', TaxUpdate, null).pipe(
                map((response) => {
                    return response.data;
                }),
            ),
        );
        return responseData;
    }
}