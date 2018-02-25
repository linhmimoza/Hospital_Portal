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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author Admin
 */
@Entity
@Table(name = "ShiftDay")
@NamedQueries({
    @NamedQuery(name = "ShiftDay.findAll", query = "SELECT s FROM ShiftDay s")})
public class ShiftDay implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "ShiftDayID")
    private Integer shiftDayID;
    @Basic(optional = false)
    @Column(name = "ShiftDay")
    private String shiftDay;
    @Basic(optional = false)
    @Column(name = "DayInWeek")
    private String dayInWeek;
    
    @Basic(optional = false)
    @Column(name = "ShiftScheduleId")
    private Integer shiftScheduleId;
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "shiftDay")
    private List<Shift> shiftList;

    public ShiftDay() {
    }

    public ShiftDay(Integer shiftDayID) {
        this.shiftDayID = shiftDayID;
    }

    public ShiftDay(Integer shiftDayID, String shiftDay, String dayInWeek, Integer shiftScheduleId) {
        this.shiftDayID = shiftDayID;
        this.shiftDay = shiftDay;
        this.dayInWeek = dayInWeek;
        this.shiftScheduleId = shiftScheduleId;
    }

    public Integer getShiftDayID() {
        return shiftDayID;
    }

    public void setShiftDayID(Integer shiftDayID) {
        this.shiftDayID = shiftDayID;
    }

    public String getShiftDay() {
        return shiftDay;
    }

    public void setShiftDay(String shiftDay) {
        this.shiftDay = shiftDay;
    }

    public String getDayInWeek() {
        return dayInWeek;
    }

    public void setDayInWeek(String dayInWeek) {
        this.dayInWeek = dayInWeek;
    }

    public List<Shift> getShiftList() {
        return shiftList;
    }

    public void setShiftList(List<Shift> shiftList) {
        this.shiftList = shiftList;
    }

    public Integer getShiftScheduleId() {
        return shiftScheduleId;
    }

    public void setShiftScheduleId(Integer shiftScheduleId) {
        this.shiftScheduleId = shiftScheduleId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (shiftDayID != null ? shiftDayID.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ShiftDay)) {
            return false;
        }
        ShiftDay other = (ShiftDay) object;
        if ((this.shiftDayID == null && other.shiftDayID != null) || (this.shiftDayID != null && !this.shiftDayID.equals(other.shiftDayID))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "models.ShiftDay[ shiftDayID=" + shiftDayID + " ]";
    }
    
}
