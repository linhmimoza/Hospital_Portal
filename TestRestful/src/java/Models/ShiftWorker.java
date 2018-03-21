/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Models;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 *
 * @author Admin
 */

public class ShiftWorker implements Serializable {

    private static final long serialVersionUID = 1L;

        private Integer shiftWorkerId;
    

    private Integer shiftId;
    
    private int id;
    private String itemName;
    private Integer userId;
    private String userName;
    public ShiftWorker() {
    }

    public ShiftWorker(Integer shiftWorkerId, Integer shiftId, Integer userId) {
        this.shiftWorkerId = shiftWorkerId;
        this.shiftId = shiftId;
        this.userId = userId;
    }

    public ShiftWorker(Integer shiftWorkerId, Integer shiftId, Integer userId, String userName) {
        this.shiftWorkerId = shiftWorkerId;
        this.shiftId = shiftId;
        this.userId = userId;
        this.userName = userName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }



    public Integer getShiftWorkerId() {
        return shiftWorkerId;
    }

    public void setShiftWorkerId(Integer shiftWorkerId) {
        this.shiftWorkerId = shiftWorkerId;
    }

    public Integer getShiftId() {
        return shiftId;
    }

    public void setShiftId(Integer shiftId) {
        this.shiftId = shiftId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (shiftWorkerId != null ? shiftWorkerId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ShiftWorker)) {
            return false;
        }
        ShiftWorker other = (ShiftWorker) object;
        if ((this.shiftWorkerId == null && other.shiftWorkerId != null) || (this.shiftWorkerId != null && !this.shiftWorkerId.equals(other.shiftWorkerId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "models.ShiftWorker[ shiftWorkerId=" + shiftWorkerId + " ]";
    }
    
}
