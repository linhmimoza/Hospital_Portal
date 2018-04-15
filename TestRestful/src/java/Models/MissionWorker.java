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

import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 *
 * @author Admin
 */

public class MissionWorker implements Serializable {

    private static final long serialVersionUID = 1L;
    private Integer missionWorkerId;   
    private Integer missionId;
    private Integer userId;
   private String userName;
    public MissionWorker() {
    }

    public MissionWorker(Integer missionWorkerId, Integer missionId, Integer userId, String userName) {
        this.missionWorkerId = missionWorkerId;
        this.missionId = missionId;
        this.userId = userId;
        this.userName = userName;
    }

    public MissionWorker(Integer missionWorkerId) {
        this.missionWorkerId = missionWorkerId;
    }

    public MissionWorker(Integer missionId, Integer userId, String userName) {
        this.missionId = missionId;
        this.userId = userId;
        this.userName = userName;
    }



    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Integer getMissionWorkerId() {
        return missionWorkerId;
    }

    public void setMissionWorkerId(Integer missionWorkerId) {
        this.missionWorkerId = missionWorkerId;
    }

    public Integer getMissionId() {
        return missionId;
    }

    public void setMissionId(Integer missionId) {
        this.missionId = missionId;
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
        hash += (missionWorkerId != null ? missionWorkerId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof MissionWorker)) {
            return false;
        }
        MissionWorker other = (MissionWorker) object;
        if ((this.missionWorkerId == null && other.missionWorkerId != null) || (this.missionWorkerId != null && !this.missionWorkerId.equals(other.missionWorkerId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "models.MissionWorker[ missionWorkerId=" + missionWorkerId + " ]";
    }
    
}
