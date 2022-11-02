import { Injectable } from "@nestjs/common";
import { mvDiscount, DiscountUpdate } from "src/dto/Interfaces";
import { mvBackendUrl, MYAPIKEY } from "src/Utils/config";
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from "rxjs";

@Injectable()
export class DiscountService {
    constructor(private readonly httpService: HttpService) { }
    createUpdate(newDiscount: mvDiscount): DiscountUpdate {
        const retProd: DiscountUpdate = {
            APIKEY: MYAPIKEY,
            mvDiscount: newDiscount,
            mvRecordAction: (newDiscount.DiscountID === undefined ? 'Insert' : 'Update'),
        }
        return retProd;
    }

    async pushDiscount(DiscountUpdate: DiscountUpdate): Promise<any> {

        const responseData = await lastValueFrom(
            this.httpService.post(mvBackendUrl + '/Discount/DiscountUpdate', DiscountUpdate, null).pipe(
                map((response) => {
                    return response.data;
                }),
            ),
        );
        return responseData;
    }

}