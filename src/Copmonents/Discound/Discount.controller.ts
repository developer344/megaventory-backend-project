import { Body, Controller, Post } from '@nestjs/common';
import { mvDiscount, DiscountUpdate } from 'src/dto/Interfaces';
import { DiscountService } from './Discount.service';

@Controller('Discount')
export class DiscountController {
    constructor(private readonly DiscountService: DiscountService) { }

    @Post('UpdateDiscount')
    async UpdateDiscount(@Body() Discount: mvDiscount): Promise<any> {
        const UpDiscount: DiscountUpdate = this.DiscountService.createUpdate(Discount);
        return await this.DiscountService.pushDiscount(UpDiscount);
    }
}