import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from './shared/article.model';
import { ArticleService } from './service/article.service';

@Component({
    selector: 'article-list',
    templateUrl: './article-list.component.html'
    // styleUrls:['user-list.component.css']
})
export class ArticleListComponent {

    articles: Article[] = [];

    constructor(private router: Router,
        private articleService: ArticleService) { }

    ngOnInit() {
        // this.loadingService.start();
        this.articleService.getList().then((res: Article[]) => {
            this.articles = res;
        }).catch(err => {
            alert(err);
            // this.loadingService.stop();
        });
    }


    ngAfterViewInit() {

    }

    detail(article: Article) {
        this.router.navigate(['/main/article-detail', article.articleId]);
    }

    delete(article: Article) {
        // this.departmentService.deleteDepartment(department.departmentId).then(() => {
            // window.location.reload();
            this.router.navigateByUrl('/main/article-list');
        // });

    }
}