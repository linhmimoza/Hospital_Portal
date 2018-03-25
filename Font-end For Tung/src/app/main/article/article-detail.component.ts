import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { ArticleService } from './service/article.service';
import { Article } from './shared/article.model';

@Component({
    selector: 'article-detail',
    templateUrl: './article-detail.component.html'
})
export class ArticleDetailComponent {
    article = new Article();
    routerSubcription: any;
    id: number = 0;
    title: string;
    articles: Article[] = [];
    constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) {

    }
    back() {
        this.router.navigate(['/main/article-list']);
    }

    ngOnInit() {
        // this.loadingService.start();
        // this.roleService.getList().then((res: Role[]) => {
        //     this.roles = res;
        //     console.log(this.roles);
        // }).catch(err => {
        //     alert(err);
        // });
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number        
            this.articleService.getList().then((articles: Article[]) => {
                this.articles = articles;
                if (this.id == 0) this.article.articleId = articles[0].articleId;
            });
            if (this.id > 0) {
                this.title = "You are updating article";
                this.articleService.getArticle(this.id).then((res: Article) => {
                    this.article = res;
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.title = "You are creating new article";
            }
        });
    }
    save() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.articleService.updateArticle(this.article).then(() => {
                    alert("Save success");
                    this.router.navigate(['/main/article-list']);
                }).catch(err => {
                    debugger
                    alert(err);
                });
            } else {
                this.articleService.createArticle(this.article).then(() => {
                    //Server trả về role sau khi save
                    //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
                    alert("Save success");
                    this.router.navigate(['/main/article-list']);
                }).catch(err => {
                    debugger
                    alert(err);
                });
            }
        });
    }
}