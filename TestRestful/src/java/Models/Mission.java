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
@Table(name = "Mission")
@NamedQueries({
    @NamedQuery(name = "Mission.findAll", query = "SELECT m FROM Mission m")})
public class Mission implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "MissionId")
    private Integer missionId;
    @Basic(optional = false)
    @Column(name = "StartDate")
    private String startDate;
    @Basic(optional = false)
    @Column(name = "EndDate")
    private String endDate;
    @Basic(optional = false)
    @Column(name = "Place")
    private String place;
    @Basic(optional = false)
    @Column(name = "Content")
    private String content;
    @Column(name = "Note")
    private String note;
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
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "mission")
    private List<MissionWorker> missionWorkerList;
    
    @Basic(optional = false)
    @Column(name = "Createby")
    private Integer createby;
    
    @Basic(optional = false)
    @Column(name = "Updateby")
    private Integer updateby;

    public Mission() {
    }

    public Mission(Integer missionId) {
        this.missionId = missionId;
    }

    public Mission(Integer missionId, String startDate, String endDate, String place, String content, String note, int status, Date createDate, Date updateDate, Integer createby, Integer updateby) {
        this.missionId = missionId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.place = place;
        this.content = content;
        this.note = note;
        this.status = status;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.createby = createby;
        this.updateby = updateby;
    }

    public Mission(Integer missionId, String startDate, String endDate, String place, String content, String note, int status, Date createDate, Date updateDate, List<MissionWorker> missionWorkerList, Integer createby, Integer updateby) {
        this.missionId = missionId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.place = place;
        this.content = content;
        this.note = note;
        this.status = status;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.missionWorkerList = missionWorkerList;
        this.createby = createby;
        this.updateby = updateby;
    }

    


    public Integer getMissionId() {
        return missionId;
    }

    public void setMissionId(Integer missionId) {
        this.missionId = missionId;
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

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
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

    public List<MissionWorker> getMissionWorkerList() {
        return missionWorkerList;
    }

    public void setMissionWorkerList(List<MissionWorker> missionWorkerList) {
        this.missionWorkerList = missionWorkerList;
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

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (missionId != null ? missionId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Mission)) {
            return false;
        }
        Mission other = (Mission) object;
        if ((this.missionId == null && other.missionId != null) || (this.missionId != null && !this.missionId.equals(other.missionId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "models.Mission[ missionId=" + missionId + " ]";
    }
    
}
