/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Models;

/**
 *
 * @author Tung
 */
public class MedicalBooking {
    int bookingId,departmentId,serviceId,timeId,bookingNumber;
    String createDate,guestName,guestPhone,guestEmail,guestAddress,note;
    String DepartmentName,ServiceName,Time,Date;

    public MedicalBooking() {
    }

    public MedicalBooking(int bookingNumber, String createDate, String guestName, String guestPhone, String guestEmail, String guestAddress, String note, String DepartmentName, String ServiceName, String Time, String Date ) {
        this.bookingNumber = bookingNumber;
        this.createDate = createDate;
        this.guestName = guestName;
        this.guestPhone = guestPhone;
        this.guestEmail = guestEmail;
        this.guestAddress = guestAddress;
        this.note = note;
        this.DepartmentName = DepartmentName;
        this.ServiceName = ServiceName;
        this.Time = Time;
        this.Date = Date;
    }
    
    

    public MedicalBooking(int bookingNumber, String guestName, String DepartmentName, String ServiceName, String Time, String Date) {
        this.bookingNumber = bookingNumber;
        this.guestName = guestName;
        this.DepartmentName = DepartmentName;
        this.ServiceName = ServiceName;
        this.Time = Time;
        this.Date = Date;
    }

    

      

    public MedicalBooking(int bookingId, int departmentId, int serviceId, int timeId, String guestPhone , String createDate, String guestName, String guestEmail, String guestAddress, String note) {
        this.bookingId = bookingId;
        this.departmentId = departmentId;
        this.serviceId = serviceId;
        this.timeId = timeId;
        this.guestPhone = guestPhone;
        this.createDate = createDate;
        this.guestName = guestName;
        this.guestEmail = guestEmail;
        this.guestAddress = guestAddress;
        this.note = note;
    }

    public MedicalBooking(int departmentId, int serviceId, int timeId, String guestPhone  , String createDate, String guestName, String guestEmail, String guestAddress, String note) {
        this.departmentId = departmentId;
        this.serviceId = serviceId;
        this.timeId = timeId;
        this.guestPhone = guestPhone;
        this.createDate = createDate;
        this.guestName = guestName;
        this.guestEmail = guestEmail;
        this.guestAddress = guestAddress;
        this.note = note;
    }

    public int getBookingNumber() {
        return bookingNumber;
    }

    public void setBookingNumber(int bookingNumber) {
        this.bookingNumber = bookingNumber;
    }

    
    public int getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(int departmentId) {
        this.departmentId = departmentId;
    }

    public String getDepartmentName() {
        return DepartmentName;
    }

    public void setDepartmentName(String DepartmentName) {
        this.DepartmentName = DepartmentName;
    }
    


    public String getServiceName() {
        return ServiceName;
    }

    public void setServiceName(String ServiceName) {
        this.ServiceName = ServiceName;
    }

    public String getTime() {
        return Time;
    }

    public void setTime(String Time) {
        this.Time = Time;
    }

    public String getDate() {
        return Date;
    }

    public void setDate(String Date) {
        this.Date = Date;
    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public int getServiceId() {
        return serviceId;
    }

    public void setServiceId(int serviceId) {
        this.serviceId = serviceId;
    }

    public int getTimeId() {
        return timeId;
    }

    public void setTimeId(int timeId) {
        this.timeId = timeId;
    }

    public String getGuestPhone() {
        return guestPhone;
    }

    public void setGuestPhone(String guestPhone) {
        this.guestPhone = guestPhone;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getGuestName() {
        return guestName;
    }

    public void setGuestName(String guestName) {
        this.guestName = guestName;
    }

    public String getGuestEmail() {
        return guestEmail;
    }

    public void setGuestEmail(String guestEmail) {
        this.guestEmail = guestEmail;
    }

    public String getGuestAddress() {
        return guestAddress;
    }

    public void setGuestAddress(String guestAddress) {
        this.guestAddress = guestAddress;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
    
}
