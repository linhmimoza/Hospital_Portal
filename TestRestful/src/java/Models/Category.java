/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Models;

import java.util.List;

/**
 *
 * @author Tung
 */
public class Category {
    int categoryId,status;
    String categoryName,description;
    List<Article> listArticle;

    public Category() {
    }

    public Category(int categoryId, int status, String categoryName, String description) {
        this.categoryId = categoryId;
        this.status = status;
        this.categoryName = categoryName;
        this.description = description;
    }

    public Category(int categoryId, int status, String categoryName, String description, List<Article> listArticle) {
        this.categoryId = categoryId;
        this.status = status;
        this.categoryName = categoryName;
        this.description = description;
        this.listArticle = listArticle;
    }

    public List<Article> getListArticle() {
        return listArticle;
    }

    public void setListArticle(List<Article> listArticle) {
        this.listArticle = listArticle;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
}
