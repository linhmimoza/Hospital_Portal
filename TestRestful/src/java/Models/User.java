/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Models;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author Admin
 */

public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer userId;

    private String userName;

    private String password;

    private String avatar;

    private String email;

    private String fullName;

    private String sex;

    private String dayOfBirth;

    private String phone;

    private String position;

    private String address;

    private String certificate;

    private int status;
    private int roleId;
    private String roleName;
    private String departmentName;
    

    private Integer departmentId;
    






    public User() {
    }

    public User(Integer userId) {
        this.userId = userId;
    }

    public User(String userName, String avatar, String email, String fullName, String sex, String dayOfBirth, String phone, String position, String address, String certificate, int roleId, Integer departmentId) {
        this.userName = userName;
        this.avatar = avatar;
        this.email = email;
        this.fullName = fullName;
        this.sex = sex;
        this.dayOfBirth = dayOfBirth;
        this.phone = phone;
        this.position = position;
        this.address = address;
        this.certificate = certificate;
        this.roleId = roleId;
        this.departmentId = departmentId;
    }

    

    public User(Integer userId, String userName, String avatar, String email, 
            String fullName, String sex, String dayOfBirth, String phone, String position, 
            String address, String certificate, int status, int roleId, String roleName, 
            Integer departmentId,String departmentName) {
        this.userId = userId;
        this.userName = userName;
        this.avatar = avatar;
        this.email = email;
        this.fullName = fullName;
        this.sex = sex;
        this.dayOfBirth = dayOfBirth;
        this.phone = phone;
        this.position = position;
        this.address = address;
        this.certificate = certificate;
        this.status = status;
        this.roleId = roleId;
        this.roleName = roleName;
        this.departmentId = departmentId;
         this.departmentName = departmentName;
    }

    public User(String userName, String password, String avatar, String email, String fullName, String sex, String dayOfBirth, String phone, String position, String address, String certificate, int status, int roleId, Integer departmentId) {
        this.userName = userName;
        this.password = password;
        this.avatar = avatar;
        this.email = email;
        this.fullName = fullName;
        this.sex = sex;
        this.dayOfBirth = dayOfBirth;
        this.phone = phone;
        this.position = position;
        this.address = address;
        this.certificate = certificate;
        this.status = status;
        this.roleId = roleId;
        this.departmentId = departmentId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    
    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public Integer getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(Integer departmentId) {
        this.departmentId = departmentId;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }



 

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getDayOfBirth() {
        return dayOfBirth;
    }

    public void setDayOfBirth(String dayOfBirth) {
        this.dayOfBirth = dayOfBirth;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCertificate() {
        return certificate;
    }

    public void setCertificate(String certificate) {
        this.certificate = certificate;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

   

 

  
    @Override
    public int hashCode() {
        int hash = 0;
        hash += (userId != null ? userId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof User)) {
            return false;
        }
        User other = (User) object;
        if ((this.userId == null && other.userId != null) || (this.userId != null && !this.userId.equals(other.userId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "models.User[ userId=" + userId + " ]";
    }
    
}
