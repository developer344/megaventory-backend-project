import { Body, Controller, Post } from '@nestjs/common';
import { mvProduct, mvSupplierClient, ProductUpdate, SupplierClientUpdate } from 'src/dto/Interfaces';
import { SupplierClientService } from './SupplierClient.service';

@Controller('SupplierClient')
export class ProductController {
    constructor(private readonly supplierClientService: SupplierClientService) { }

    @Post('SupplierClientUpdate')
    async UpdateSupplierClient(@Body() supplierClient: mvSupplierClient): Promise<any> {
        const UpSupplierClient: SupplierClientUpdate = this.supplierClientService.createUpdate(supplierClient);
        return await this.supplierClientService.pushSupplierClient(UpSupplierClient);
    }
}