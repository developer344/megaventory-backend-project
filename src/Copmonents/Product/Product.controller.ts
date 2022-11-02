import { Body, Controller, Post } from '@nestjs/common';
import { mvProduct, ProductUpdate } from 'src/dto/Interfaces';
import { ProductService } from './Product.service';

@Controller('Product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post('ProductUpdate')
    async UpdateProduct(@Body() product: mvProduct): Promise<any> {
        const UpProduct: ProductUpdate = this.productService.createUpdate(product);
        const response = await this.productService.pushProduct(UpProduct);
        console.log(response);
        return response;
    }
}