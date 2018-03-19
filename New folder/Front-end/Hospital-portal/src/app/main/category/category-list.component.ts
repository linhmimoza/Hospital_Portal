import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from './shared/category.model';
import { CategoryService } from './service/category.service';

@Component({
    selector: 'category-list',
    templateUrl: './category-list.component.html'
    // styleUrls:['user-list.component.css']
})
export class CategoryListComponent {

    categories: Category[] = [];

    constructor(private router: Router,
        private categoryService: CategoryService) { }

    ngOnInit() {
        // this.loadingService.start();
        this.categoryService.getList().then((res: Category[]) => {
            this.categories = res;
        }).catch(err => {
            alert(err);
            // this.loadingService.stop();
        });
    }


    ngAfterViewInit() {

    }

    detail(category: Category) {
        this.router.navigate(['/main/category-detail', category.categoryId]);
    }

    delete(category: Category) {
        // this.departmentService.deleteDepartment(department.departmentId).then(() => {
            // window.location.reload();
            this.router.navigateByUrl('/main/category-list');
        // });

    }
}