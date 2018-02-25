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
@Table(name = "User")
@NamedQueries({
    @NamedQuery(name = "User.findAll", query = "SELECT u FROM User u")})
public class User implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "UserId")
    private Integer userId;
    @Basic(optional = false)
    @Column(name = "UserName")
    private String userName;
    @Basic(optional = false)
    @Column(name = "Password")
    private String password;
    @Column(name = "Avatar")
    private String avatar;
    @Basic(optional = false)
    @Column(name = "Email")
    private String email;
    @Basic(optional = false)
    @Column(name = "FullName")
    private String fullName;
    @Basic(optional = false)
    @Column(name = "Sex")
    private int sex;
    @Basic(optional = false)
    @Column(name = "DayOfBirth")
    private String dayOfBirth;
    @Basic(optional = false)
    @Column(name = "Phone")
    private String phone;
    @Basic(optional = false)
    @Column(name = "Position")
    private String position;
    @Column(name = "Address")
    private String address;
    @Column(name = "Certificate")
    private String certificate;
    @Basic(optional = false)
    @Column(name = "Status")
    private int status;
    private int role;
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<ShiftSchedule> shiftScheduleList;
    @OneToMany(mappedBy = "user1")
    private List<ShiftSchedule> shiftScheduleList1;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<MissionWorker> missionWorkerList;
    
    @Basic(optional = false)
    @Column(name = "DepartmentId")
    private Integer departmentId;
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Meeting> meetingList;
    @OneToMany(mappedBy = "user1")
    private List<Meeting> meetingList1;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Article> articleList;
    @OneToMany(mappedBy = "user1")
    private List<Article> articleList1;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Notification> notificationList;
    @OneToMany(mappedBy = "user1")
    private List<Notification> notificationList1;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Mission> missionList;
    @OneToMany(mappedBy = "user1")
    private List<Mission> missionList1;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<ShiftWorker> shiftWorkerList;

    public User() {
    }

    public User(Integer userId) {
        this.userId = userId;
    }

    public User(Integer userId,int role, String userName, String avatar, String email, String fullName, int sex, String dayOfBirth, String phone, String position, String address, String certificate, int status, Integer departmentId) {
        this.userId = userId;
        this.userName = userName;
        this.avatar = avatar;
        this.email = email;
        this.fullName = fullName;
        this.sex = sex;
        this.dayOfBirth = dayOfBirth;
        this.phone = phone;
        this.position = position;
        this.address = address;
        this.certificate = certificate;
        this.status = status;
        this.departmentId = departmentId;
        this.role=role;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    public Integer getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(Integer departmentId) {
        this.departmentId = departmentId;
    }



 

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public int getSex() {
        return sex;
    }

    public void setSex(int sex) {
        this.sex = sex;
    }

    public String getDayOfBirth() {
        return dayOfBirth;
    }

    public void setDayOfBirth(String dayOfBirth) {
        this.dayOfBirth = dayOfBirth;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCertificate() {
        return certificate;
    }

    public void setCertificate(String certificate) {
        this.certificate = certificate;
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

    public List<ShiftSchedule> getShiftScheduleList1() {
        return shiftScheduleList1;
    }

    public void setShiftScheduleList1(List<ShiftSchedule> shiftScheduleList1) {
        this.shiftScheduleList1 = shiftScheduleList1;
    }

    public List<MissionWorker> getMissionWorkerList() {
        return missionWorkerList;
    }

    public void setMissionWorkerList(List<MissionWorker> missionWorkerList) {
        this.missionWorkerList = missionWorkerList;
    }

    public Integer getDepartment() {
        return departmentId;
    }

    public void setDepartment(Integer departmentId) {
        this.departmentId = departmentId;
    }

    public List<Meeting> getMeetingList() {
        return meetingList;
    }

    public void setMeetingList(List<Meeting> meetingList) {
        this.meetingList = meetingList;
    }

    public List<Meeting> getMeetingList1() {
        return meetingList1;
    }

    public void setMeetingList1(List<Meeting> meetingList1) {
        this.meetingList1 = meetingList1;
    }

    public List<Article> getArticleList() {
        return articleList;
    }

    public void setArticleList(List<Article> articleList) {
        this.articleList = articleList;
    }

    public List<Article> getArticleList1() {
        return articleList1;
    }

    public void setArticleList1(List<Article> articleList1) {
        this.articleList1 = articleList1;
    }

    public List<Notification> getNotificationList() {
        return notificationList;
    }

    public void setNotificationList(List<Notification> notificationList) {
        this.notificationList = notificationList;
    }

    public List<Notification> getNotificationList1() {
        return notificationList1;
    }

    public void setNotificationList1(List<Notification> notificationList1) {
        this.notificationList1 = notificationList1;
    }

 

    public List<Mission> getMissionList() {
        return missionList;
    }

    public void setMissionList(List<Mission> missionList) {
        this.missionList = missionList;
    }

    public List<Mission> getMissionList1() {
        return missionList1;
    }

    public void setMissionList1(List<Mission> missionList1) {
        this.missionList1 = missionList1;
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
        hash += (userId != null ? userId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof User)) {
            return false;
        }
        User other = (User) object;
        if ((this.userId == null && other.userId != null) || (this.userId != null && !this.userId.equals(other.userId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "models.User[ userId=" + userId + " ]";
    }
    
}
