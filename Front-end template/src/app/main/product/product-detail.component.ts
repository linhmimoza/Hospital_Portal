import { Component } from "@angular/core";
import { ProductService } from "./service/product.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "./shared/product.model";
import { CategoryService } from "../category/service/category.service";
import { Category } from "../category/shared/category.model";
import { UnitService } from "../unit/service/unit.service";
import { Unit } from "../unit/shared/unit.model";
import { ManufacturerService } from "../manufacturer/service/manufacturer.service";
import { Manufacturer } from "../manufacturer/shared/manufacturer.model";
import { SupplierService } from "../supplier/service/supplier.service";
import { Suppiler } from "../supplier/shared/supplier.model";

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
    product = new Product;
    id: number = 0;
    routeSubcription: any;
    title: string;
    categories: Category[] = [];
    units: Unit[] = [];
    manufacturers: Manufacturer[] = [];
    suppliers: Suppiler [] = [];
    constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService,
        private categoryService: CategoryService, private unitService: UnitService, private manufacturerService: ManufacturerService,
    private supplierService: SupplierService) { }

    ngOnInit() {
        this.supplierService.getList().then((res: Suppiler[]) => {
            this.suppliers = res;
            console.log(this.suppliers);
        }).catch(err => {
            alert(err);
        });
        this.manufacturerService.getList().then((res: Manufacturer[]) => {
            this.manufacturers = res;
            console.log(this.manufacturers);
        }).catch(err => {
            alert(err);
        });
        this.categoryService.getList().then((res: Category[]) => {
            this.categories = res;
            if(this.id == 0) this.product.CategoryId = this.categories[0].Id;
            console.log(this.categories);
        }).catch(err => {
            alert(err);
        });
        this.unitService.getList().then((res: Unit[]) => {
            this.units = res;
            if(this.id == 0) this.product.UnitId = this.units[0].Id;
            console.log(this.units);
        }).catch(err => {
            alert(err);
        });
        this.routeSubcription = this.route.params.subscribe(params => {
            this.id = +params['id'];

            if (this.id > 0) {
                this.title = "Bạn đang chỉnh sửa thông tin sản phẩm";
                this.productService.getProduct(this.id).then((res: Product) => {
                    this.product = res;
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.title = "Bạn đang tạo mới sản phẩm";
            }
        });
    }

    save() {
        this.productService.saveProduct(this.product).then((res: Product) => {
            if (this.id == 0) {
                this.router.navigate(['/main/product-detail', res.Id]);
            }
        }).catch(err => {
            console.log(err);
        });
    }

    back() {
        this.router.navigate(['/main/product-list']);
    }
}