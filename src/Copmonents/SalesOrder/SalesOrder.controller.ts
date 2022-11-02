import { Body, Controller, Post } from '@nestjs/common';
import { mvSalesOrder, SalesOrderUpdate } from 'src/dto/Interfaces';
import { SalesOrderService } from './SalesOrder.service';

@Controller('SalesOrder')
export class SalesOrderController {
    constructor(private readonly SalesOrderService: SalesOrderService) { }

    @Post('SalesOrderUpdate')
    async UpdateSalesOrder(@Body() SalesOrder: mvSalesOrder): Promise<any> {
        const UpSalesOrder: SalesOrderUpdate = this.SalesOrderService.createUpdate(SalesOrder);
        return await this.SalesOrderService.pushSalesOrder(UpSalesOrder);
    }
}