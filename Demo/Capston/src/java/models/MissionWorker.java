/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

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
@Entity
@Table(name = "MissionWorker")
@NamedQueries({
    @NamedQuery(name = "MissionWorker.findAll", query = "SELECT m FROM MissionWorker m")})
public class MissionWorker implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "MissionWorkerId")
    private Integer missionWorkerId;
    @JoinColumn(name = "MissionId", referencedColumnName = "MissionId")
    @ManyToOne(optional = false)
    private Mission mission;
    @JoinColumn(name = "UserId", referencedColumnName = "UserId")
    @ManyToOne(optional = false)
    private User user;

    public MissionWorker() {
    }

    public MissionWorker(Integer missionWorkerId) {
        this.missionWorkerId = missionWorkerId;
    }

    public Integer getMissionWorkerId() {
        return missionWorkerId;
    }

    public void setMissionWorkerId(Integer missionWorkerId) {
        this.missionWorkerId = missionWorkerId;
    }

    public Mission getMission() {
        return mission;
    }

    public void setMission(Mission mission) {
        this.mission = mission;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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
