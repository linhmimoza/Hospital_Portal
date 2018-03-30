/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Models;

/**
 *
 * @author Tung
 */
public class Introduce {
    int id,status,uploadBy,updateBy;
    String title,content,uploadDay,updateDay,uploadByUser,updateByUser;

    public Introduce() {
    }

    public Introduce(int id, int status, String title, String content, String uploadDay, String updateDay, String uploadByUser, String updateByUser) {
        this.id = id;
        this.status = status;
        this.title = title;
        this.content = content;
        this.uploadDay = uploadDay;
        this.updateDay = updateDay;
        this.uploadByUser = uploadByUser;
        this.updateByUser = updateByUser;
    }

    
    
    

    public Introduce(int id, int status, int uploadBy, int updateBy, String title, String content, String uploadDay, String updateDay) {
        this.id = id;
        this.status = status;
        this.uploadBy = uploadBy;
        this.updateBy = updateBy;
        this.title = title;
        this.content = content;
        this.uploadDay = uploadDay;
        this.updateDay = updateDay;
    }

    public String getUploadByUser() {
        return uploadByUser;
    }

    public void setUploadByUser(String uploadByUser) {
        this.uploadByUser = uploadByUser;
    }

    public String getUpdateByUser() {
        return updateByUser;
    }

    public void setUpdateByUser(String updateByUser) {
        this.updateByUser = updateByUser;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getUploadDay() {
        return uploadDay;
    }

    public void setUploadDay(String uploadDay) {
        this.uploadDay = uploadDay;
    }

    public String getUpdateDay() {
        return updateDay;
    }

    public void setUpdateDay(String updateDay) {
        this.updateDay = updateDay;
    }
    
}
