import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './service/product.service';
import { Product } from './shared/product.model';
@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    products: Product[] = [];
    constructor(private router: Router, private productService: ProductService) {

    }

    ngOnInit() {
        this.productService.getList().then((res: Product[]) => {
            this.products = res;
            console.log(this.products);
        }).catch (err => {
            console.log(err);
        });
    }

    detail(product: Product) {
        this.router.navigate(['/main/product-detail', product.Id]);
    }
}