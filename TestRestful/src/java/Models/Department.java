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

public class Department implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer departmentId;

    private String departmentName;

    private String description;
    private String code;

    private int status;
    private int quantity;

    private List<ShiftSchedule> shiftScheduleList;
  

    public Department() {
    }

    public Department(Integer departmentId) {
        this.departmentId = departmentId;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Department(Integer departmentId, String departmentName, String description, String code, int status, int quantity) {
        this.departmentId = departmentId;
        this.departmentName = departmentName;
        this.description = description;
        this.code = code;
        this.status = status;
        this.quantity = quantity;
    }

    public Department(Integer departmentId, String departmentName, String description, String code, int status) {
        this.departmentId = departmentId;
        this.departmentName = departmentName;
        this.description = description;
        this.code = code;
        this.status = status;
    }

   

   
 

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public List<ShiftSchedule> getShiftScheduleList() {
        return shiftScheduleList;
    }

    public void setShiftScheduleList(List<ShiftSchedule> shiftScheduleList) {
        this.shiftScheduleList = shiftScheduleList;
    }

  

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (departmentId != null ? departmentId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Department)) {
            return false;
        }
        Department other = (Department) object;
        if ((this.departmentId == null && other.departmentId != null) || (this.departmentId != null && !this.departmentId.equals(other.departmentId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "models.Department[ departmentId=" + departmentId + " ]";
    }
    
}
