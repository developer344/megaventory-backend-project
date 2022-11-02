import { Body, Controller, Post } from '@nestjs/common';
import { InventoryLocationUpdate, mvInventoryLocation, mvSupplierClient, SupplierClientUpdate } from 'src/dto/Interfaces';
import { InventoryLocationService } from './InventoryLocation.service';

@Controller('InventoryLocation')
export class InventoryLocationController {
    constructor(private readonly inventoryLocationService: InventoryLocationService) { }

    @Post('InventoryLocationUpdate')
    async UpdateInventoryLocation(@Body() inventoryLocation: mvInventoryLocation): Promise<any> {
        const UpInventoryLocation: InventoryLocationUpdate = this.inventoryLocationService.createUpdate(inventoryLocation);
        return await this.inventoryLocationService.pushInventoryLocation(UpInventoryLocation);
    }
}