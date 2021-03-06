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

public class Shift implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer shiftId;

    private int shiftNO;

    private String startTime;

    private String endTime;

    private String other;
    
    private Integer shiftDayID;
    
    private List<ShiftWorker> shiftWorkerList;
    
    public Shift() {
    }

    public Shift(Integer shiftId) {
        this.shiftId = shiftId;
    }

    public Shift(Integer shiftId, int shiftNO, String startTime, String endTime, Integer shiftDayID, String other) {
        this.shiftId = shiftId;
        this.shiftNO = shiftNO;
        this.startTime = startTime;
        this.endTime = endTime;
        this.shiftDayID = shiftDayID;
        this.other = other;
    }

    public Shift(Integer shiftId, int shiftNO, String startTime, String endTime, Integer shiftDayID, String other, List<ShiftWorker> shiftWorkerList) {
        this.shiftId = shiftId;
        this.shiftNO = shiftNO;
        this.startTime = startTime;
        this.endTime = endTime;
        this.other = other;
        this.shiftDayID = shiftDayID;
        this.shiftWorkerList = shiftWorkerList;
    }

    public Integer getShiftId() {
        return shiftId;
    }

    public void setShiftId(Integer shiftId) {
        this.shiftId = shiftId;
    }

    public int getShiftNO() {
        return shiftNO;
    }

    public void setShiftNO(int shiftNO) {
        this.shiftNO = shiftNO;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getOther() {
        return other;
    }

    public void setOther(String other) {
        this.other = other;
    }

    public Integer getShiftDayID() {
        return shiftDayID;
    }

    public void setShiftDayID(Integer shiftDayID) {
        this.shiftDayID = shiftDayID;
    }

    public List<ShiftWorker> getShiftWorkerList() {
        return shiftWorkerList;
    }

    public void setShiftWorkerList(List<ShiftWorker> shiftWorkerList) {
        this.shiftWorkerList = shiftWorkerList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (shiftId != null ? shiftId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Shift)) {
            return false;
        }
        Shift other = (Shift) object;
        if ((this.shiftId == null && other.shiftId != null) || (this.shiftId != null && !this.shiftId.equals(other.shiftId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "models.Shift[ shiftId=" + shiftId + " ]";
    }
    
}
