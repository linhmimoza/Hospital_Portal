import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { InOut } from './shared/in-out.model';
import { InOutService } from './service/in-out.service';
import { ProductService } from '../product/service/product.service';
import { Product } from '../product/shared/product.model';

@Component({
    selector: 'in-out-detail',
    templateUrl: './in-out-detail.component.html'
})
export class InOutDetailComponent {
    inOut = new InOut();
    routerSubcription: any;
    id: number = 0;
    title: string;
    products: Product[] = [];
    constructor(private route: ActivatedRoute, private router: Router, private inOutService: InOutService,
        private productService: ProductService) {
    }

    ngOnInit() {
        this.productService.getList().then((res: Product[]) => {
            this.products = res;
            if (this.id == 0) this.inOut.ProductId = this.products[0].Id;
            console.log(this.products);
        }).catch(err => {
            alert(err);
        });
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.title = "Bạn đang chỉnh sửa xuất nhập hàng";
                this.inOutService.getInOut(this.id).then((res: InOut) => {
                    this.inOut = res;
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.title = "Bạn đang tạo mới xuất nhập hàng";
            }
        });
    }
    save() {
        this.inOutService.saveInOut(this.inOut).then((res: InOut) => {
            if (this.id == 0) {
                this.router.navigate(['/main/in-out-detail/', res.Id]);
            }
        }).catch(err => {
            alert(err);
        });
    }

    back() {
        this.router.navigate(['/main/in-out-list']);
    }
}