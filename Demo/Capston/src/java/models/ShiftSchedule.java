/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

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
@Entity
@Table(name = "ShiftSchedule")
@NamedQueries({
    @NamedQuery(name = "ShiftSchedule.findAll", query = "SELECT s FROM ShiftSchedule s")})
public class ShiftSchedule implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "ShiftScheduleId")
    private Integer shiftScheduleId;
    @Basic(optional = false)
    @Column(name = "StartDate")
    private String startDate;
    @Column(name = "EndDate")
    private String endDate;
    @Basic(optional = false)
    @Column(name = "Status")
    private int status;
    @Basic(optional = false)
    @Column(name = "CreateDate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;
    @Column(name = "UpdateDate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updateDate;
    @JoinColumn(name = "DepartmentId", referencedColumnName = "DepartmentId")
    @ManyToOne(optional = false)
    private Department department;
    @JoinColumn(name = "Createby", referencedColumnName = "UserId")
    @ManyToOne(optional = false)
    private User user;
    @JoinColumn(name = "Updateby", referencedColumnName = "UserId")
    @ManyToOne
    private User user1;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "shiftSchedule")
    private List<ShiftDay> shiftDayList;

    public ShiftSchedule() {
    }

    public ShiftSchedule(Integer shiftScheduleId) {
        this.shiftScheduleId = shiftScheduleId;
    }

    public ShiftSchedule(Integer shiftScheduleId, String startDate, int status, Date createDate) {
        this.shiftScheduleId = shiftScheduleId;
        this.startDate = startDate;
        this.status = status;
        this.createDate = createDate;
    }

    public Integer getShiftScheduleId() {
        return shiftScheduleId;
    }

    public void setShiftScheduleId(Integer shiftScheduleId) {
        this.shiftScheduleId = shiftScheduleId;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public User getUser1() {
        return user1;
    }

    public void setUser1(User user1) {
        this.user1 = user1;
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
