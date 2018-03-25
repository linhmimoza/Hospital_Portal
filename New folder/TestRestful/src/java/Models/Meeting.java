/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Models;

import java.io.Serializable;
import java.sql.Time;
import java.util.Date;
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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author Admin
 */
@Entity
@Table(name = "Meeting")
@NamedQueries({
    @NamedQuery(name = "Meeting.findAll", query = "SELECT m FROM Meeting m")})
public class Meeting implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "MeetingId")
    private Integer meetingId;
    @Basic(optional = false)
    @Column(name = "MeetingName")
    private String meetingName;
    @Basic(optional = false)
    @Column(name = "StartTime")
    @Temporal(TemporalType.TIMESTAMP)
    private String startTime;
    private String duration;
    private String date;
    @Column(name = "Content")
    private String content;
    @Column(name = "Note")
    private String note;
    @Basic(optional = false)
    @Column(name = "CreateDate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;
    @Column(name = "UpdateDate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updateDate;
    @Basic(optional = false)
    @Column(name = "Status")
    private int status;
    
    @Basic(optional = false)
    @Column(name = "RoomId")
    private Integer roomId;
     private String roomName;
    @Basic(optional = false)
    @Column(name = "CreateBy")
    private Integer createBy;
    
    @Basic(optional = false)
    @Column(name = "UpdateBy")
    private Integer updateBy;
    
    public Meeting() {
    }

    public Meeting(Integer meetingId) {
        this.meetingId = meetingId;
    }

    public Meeting(Integer meetingId, String meetingName, String startTime, String duration, String date, String content, String note, Date createDate, Date updateDate, int status, Integer roomId, Integer createBy, Integer updateBy) {
        this.meetingId = meetingId;
        this.meetingName = meetingName;
        this.startTime = startTime;
        this.duration = duration;
        this.date = date;
        this.content = content;
        this.note = note;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.status = status;
        this.roomId = roomId;
        this.createBy = createBy;
        this.updateBy = updateBy;
    }

    

    public Meeting(Integer meetingId, String meetingName, String startTime, String duration, String date, String content, String note, Date createDate, Date updateDate, int status, Integer roomId, String roomName, Integer createBy, Integer updateBy) {
        this.meetingId = meetingId;
        this.meetingName = meetingName;
        this.startTime = startTime;
        this.duration = duration;
        this.date = date;
        this.content = content;
        this.note = note;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.status = status;
        this.roomId = roomId;
        this.roomName = roomName;
        this.createBy = createBy;
        this.updateBy = updateBy;
    }



    public Integer getMeetingId() {
        return meetingId;
    }

    public void setMeetingId(Integer meetingId) {
        this.meetingId = meetingId;
    }

    public String getMeetingName() {
        return meetingName;
    }

    public void setMeetingName(String meetingName) {
        this.meetingName = meetingName;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
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

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Integer getRoomId() {
        return roomId;
    }

    public void setRoomId(Integer roomId) {
        this.roomId = roomId;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public Integer getCreateBy() {
        return createBy;
    }

    public void setCreateBy(Integer createBy) {
        this.createBy = createBy;
    }

    public Integer getUpdateBy() {
        return updateBy;
    }

    public void setUpdateBy(Integer updateBy) {
        this.updateBy = updateBy;
    }



    
    

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (meetingId != null ? meetingId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Meeting)) {
            return false;
        }
        Meeting other = (Meeting) object;
        if ((this.meetingId == null && other.meetingId != null) || (this.meetingId != null && !this.meetingId.equals(other.meetingId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "models.Meeting[ meetingId=" + meetingId + " ]";
    }
    
}
