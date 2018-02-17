import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Category } from './shared/category.model';
import { CategoryService } from './service/category.service';

@Component({
    selector: 'category-detail',
    templateUrl: './category-detail.component.html'
})
export class CategoryDetailComponent {
    category = new Category();
    routerSubcription: any;
    id: number = 0;
    title: string;
    constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.title = "Bạn đang chỉnh sửa loại sản phẩm";
                this.categoryService.getCate(this.id).then((res: Category) => {
                    this.category = res;
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.title = "Bạn đang tạo mới loại sản phẩm";
            }
        });
    }
    save() {
        this.categoryService.saveCate(this.category).then((res: Category) => {
            if (this.id == 0) {
                this.router.navigate(['/main/category-detail/',res.Id]);
            }
        }).catch(err => {
            alert(err);
        });
    }

    back() {
        this.router.navigate(['/main/category-list']);
    }
}