/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Models;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author Admin
 */

public class ShiftSchedule implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer shiftScheduleId;


    private String week;
    private int status;

    private String createDate;

    private String updateDate;
    

    private Integer departmentId;

    private Integer createby;
    

    private Integer updateby;
    

    private List<ShiftDay> shiftDayList;

    public ShiftSchedule() {
    }

    public ShiftSchedule(Integer shiftScheduleId) {
        this.shiftScheduleId = shiftScheduleId;
    }

    public ShiftSchedule(Integer shiftScheduleId, int status, String createDate, String updateDate, Integer departmentId, Integer createby, Integer updateby) {
        this.shiftScheduleId = shiftScheduleId;
        this.status = status;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.departmentId = departmentId;
        this.createby = createby;
        this.updateby = updateby;
    }

    public ShiftSchedule(Integer shiftScheduleId, int status, String createDate, String updateDate, Integer departmentId, Integer createby, Integer updateby, List<ShiftDay> shiftDayList) {
        this.shiftScheduleId = shiftScheduleId;
        this.status = status;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.departmentId = departmentId;
        this.createby = createby;
        this.updateby = updateby;
        this.shiftDayList = shiftDayList;
    }



    public Integer getShiftScheduleId() {
        return shiftScheduleId;
    }

    public void setShiftScheduleId(Integer shiftScheduleId) {
        this.shiftScheduleId = shiftScheduleId;
    }



    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(String updateDate) {
        this.updateDate = updateDate;
    }

    public Integer getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(Integer departmentId) {
        this.departmentId = departmentId;
    }

    public String getWeek() {
        return week;
    }

    public void setWeek(String week) {
        this.week = week;
    }

    public Integer getCreateby() {
        return createby;
    }

    public void setCreateby(Integer createby) {
        this.createby = createby;
    }

    public Integer getUpdateby() {
        return updateby;
    }

    public void setUpdateby(Integer updateby) {
        this.updateby = updateby;
    }

    public List<ShiftDay> getShiftDayList() {
        return shiftDayList;
    }

    public void setShiftDayList(List<ShiftDay> shiftDayList) {
        this.shiftDayList = shiftDayList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (shiftScheduleId != null ? shiftScheduleId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ShiftSchedule)) {
            return false;
        }
        ShiftSchedule other = (ShiftSchedule) object;
        if ((this.shiftScheduleId == null && other.shiftScheduleId != null) || (this.shiftScheduleId != null && !this.shiftScheduleId.equals(other.shiftScheduleId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "models.ShiftSchedule[ shiftScheduleId=" + shiftScheduleId + " ]";
    }
    
}
