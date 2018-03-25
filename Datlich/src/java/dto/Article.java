/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

/**
 *
 * @author Tung
 */
public class Article {
    int articleId,categoryId,uploadBy,updateBy,status;
    String title,uploadDate,updateDate,link,describe,uploadByName,updateByName;

    public Article() {
    }

    public Article(int articleId, int categoryId, int uploadBy, int updateBy, int status, String title, String uploadDate, String updateDate, String link, String describe) {
        this.articleId = articleId;
        this.categoryId = categoryId;
        this.uploadBy = uploadBy;
        this.updateBy = updateBy;
        this.status = status;
        this.title = title;
        this.uploadDate = uploadDate;
        this.updateDate = updateDate;
        this.link = link;
        this.describe = describe;
    }

    public Article(int articleId, int categoryId, int uploadBy, int updateBy, int status, String title, String uploadDate, String updateDate, String link, String describe, String uploadByName, String updateByName) {
        this.articleId = articleId;
        this.categoryId = categoryId;
        this.uploadBy = uploadBy;
        this.updateBy = updateBy;
        this.status = status;
        this.title = title;
        this.uploadDate = uploadDate;
        this.updateDate = updateDate;
        this.link = link;
        this.describe = describe;
        this.uploadByName = uploadByName;
        this.updateByName = updateByName;
    }

    public String getUploadByName() {
        return uploadByName;
    }

    public void setUploadByName(String uploadByName) {
        this.uploadByName = uploadByName;
    }

    public String getUpdateByName() {
        return updateByName;
    }

    public void setUpdateByName(String updateByName) {
        this.updateByName = updateByName;
    }

        

    public String getDescribe() {
        return describe;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

    

    public int getArticleId() {
        return articleId;
    }

    public void setArticleId(int articleId) {
        this.articleId = articleId;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public int getUploadBy() {
        return uploadBy;
    }

    public void setUploadBy(int uploadBy) {
        this.uploadBy = uploadBy;
    }

    public int getUpdateBy() {
        return updateBy;
    }

    public void setUpdateBy(int updateBy) {
        this.updateBy = updateBy;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(String uploadDate) {
        this.uploadDate = uploadDate;
    }

    public String getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(String updateDate) {
        this.updateDate = updateDate;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
    
}
