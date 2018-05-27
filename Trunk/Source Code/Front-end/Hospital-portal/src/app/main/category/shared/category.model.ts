import { Article } from '../../article/shared/article.model';

export class Category{
    categoryId: number;
    categoryName: string;
    description: string;
    sratus: number;
    listArticle: Article[];
    showMore: boolean;
    constructor(){
        
    }
}