import { Body, Controller, Post } from '@nestjs/common';
import { mvProduct, ProductUpdate } from 'src/dto/Interfaces';
import { ProductService } from './Product.service';

@Controller('Product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post('UpdateProduct')
    async UpdateProduct(@Body() product: mvProduct): Promise<any> {
        const UpProduct: ProductUpdate = this.productService.createUpdate(product);
        return await this.productService.pushProduct(UpProduct);
    }
}