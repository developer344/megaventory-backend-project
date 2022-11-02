import { Body, Controller, Post } from '@nestjs/common';
import { mvTax, TaxUpdate } from 'src/dto/Interfaces';
import { TaxService } from './Tax.service';

@Controller('Tax')
export class TaxController {
    constructor(private readonly TaxService: TaxService) { }

    @Post('TaxUpdate')
    async UpdateTax(@Body() Tax: mvTax): Promise<any> {
        const UpTax: TaxUpdate = this.TaxService.createUpdate(Tax);
        return await this.TaxService.pushTax(UpTax);
    }
}