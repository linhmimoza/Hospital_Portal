/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import DBUtils.DBUtils;
import Models.MedicalBooking;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Tung
 */
public class MedicalBookingDao {

    private PreparedStatement stm;
    private Connection con;
    private ResultSet rs;

    private void closeConnection() {
        try {
            if (rs != null) {
                rs.close();
            }
            if (stm != null) {
                stm.close();
            }
            if (con != null) {
                con.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public String createMedicalBooking(MedicalBooking mb) throws SQLException {

        String result = "Success";
        TimeDao dao= new TimeDao();
                int number=dao.getNumber(mb.getTimeId())+1;
            try {
                con = DBUtils.makeConnection();
                if (con != null) {
                    String sql = "insert into MedicalBooking(DepartmentId,ServiceId,"
                            + "TimeId,CreateDate,GuestName,GuestPhone,GuestEmail,GuestAddress,"
                            + "GuestIdentity,Note, BookingNumber)values"
                            + "("+mb.getDepartmentId()+","+mb.getServiceId()+","
                            + ""+mb.getTimeId()+",'"+mb.getCreateDate()+
                            "','"+mb.getGuestName()+"','"+mb.getGuestPhone()+"','"
                            + ""+mb.getGuestEmail()+"','"+mb.getGuestAddress()+"','"
                            +mb.getGuestIdentity()+"','"+mb.getNote()+"',"+number+")";
                    stm = con.prepareStatement(sql);
                 
                    stm.executeUpdate();
                }
            } catch (Exception e) {
                e.printStackTrace();
                result = "Failed";
            } finally {
                closeConnection();
            }
//        }
        return result;
    }

    public int getBookingId() throws SQLException, ClassNotFoundException {
        int id = 0;
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "select Max(BookingId) as BookingId from MedicalBooking";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                if (rs.next()) {
                    id = rs.getInt("BookingId");
                }
            }
        } finally {
            closeConnection();
        }
        return id;
    }

    public List<MedicalBooking> getListMb(String guestPhone) throws SQLException, ClassNotFoundException {
        List<MedicalBooking> listMb = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select d.DepartmentName,s.ServiceName,t.Date,m.GuestName,m.BookingNumber,m.IntendTime \n"
                        + "from Service s,Time t,Department d,MedicalBooking m \n"
                        + "where m.GuestPhone=? and s.ServiceId=m.ServiceId and t.TimeId=m.TimeId and d.DepartmentId=m.DepartmentId";
                stm = con.prepareStatement(sql);
                stm.setString(1, guestPhone);
                rs = stm.executeQuery();
                while (rs.next()) {
                    int bookingNumber = rs.getInt("BookingNumber");
                    String guestName = rs.getString("GuestName");
                    String DepartmentName = rs.getString("DepartmentName");
                    String ServiceName = rs.getString("ServiceName");
                    String Time = rs.getString("IntendTime");
                    String Date = rs.getString("Date");
                    MedicalBooking mb = new MedicalBooking( bookingNumber, guestName, DepartmentName, ServiceName, Time, Date );
                    listMb.add(mb);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        return listMb;
    }
    
    public List<MedicalBooking> getListMbAdmin() throws SQLException, ClassNotFoundException {
        List<MedicalBooking> listMb = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select d.DepartmentName,s.ServiceName,t.Date,m.GuestName,m.BookingNumber,m.IntendTime,m.CreateDate,m.GuestPhone,m.GuestEmail,m.GuestAddress,m.Note,m.GuestIdentity \n"
                        + "from Service s,Time t,Department d,MedicalBooking m \n"
                        + "where s.ServiceId=m.ServiceId and t.TimeId=m.TimeId and d.DepartmentId=m.DepartmentId";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    int bookingNumber = rs.getInt("BookingNumber");
                    String createDate = rs.getString("CreateDate");
                    String guestName = rs.getString("GuestName");
                    String guestPhone = rs.getString("GuestPhone");
                    String guestEmail = rs.getString("GuestEmail");
                    String guestAddress = rs.getString("GuestAddress");
                    String guestIdentity = rs.getString("GuestIdentity");
                    String note = rs.getString("Note");
                    String DepartmentName = rs.getString("DepartmentName");
                    String ServiceName = rs.getString("ServiceName");
                    String Time = rs.getString("IntendTime");
                    String Date = rs.getString("Date");
                    MedicalBooking mb = new MedicalBooking( bookingNumber, createDate, guestName, guestPhone, guestEmail, guestAddress, note, DepartmentName, ServiceName, Time, Date, guestIdentity );
                    listMb.add(mb);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        return listMb;
    }
    
    public List<MedicalBooking> getListMbAdminByName(String GuestName) throws SQLException, ClassNotFoundException {
        List<MedicalBooking> listMb = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select d.DepartmentName,s.ServiceName,t.Date,m.GuestName,m.BookingNumber,m.IntendTime,m.CreateDate,m.GuestPhone,m.GuestEmail,m.GuestAddress,m.Note,m.GuestIdentity \n"
                        + "from Service s,Time t,Department d,MedicalBooking m \n"
                        + "where m.GuestName like '%"+ GuestName.trim() +"%' and s.ServiceId=m.ServiceId and t.TimeId=m.TimeId and d.DepartmentId=m.DepartmentId";
                stm = con.prepareStatement(sql);
                System.out.println(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    int bookingNumber = rs.getInt("BookingNumber");
                    String createDate = rs.getString("CreateDate");
                    String guestName = rs.getString("GuestName");
                    String guestPhone = rs.getString("GuestPhone");
                    String guestEmail = rs.getString("GuestEmail");
                    String guestAddress = rs.getString("GuestAddress");
                    String guestIdentity = rs.getString("GuestIdentity");
                    String note = rs.getString("Note");
                    String DepartmentName = rs.getString("DepartmentName");
                    String ServiceName = rs.getString("ServiceName");
                    String Time = rs.getString("IntendTime");
                    String Date = rs.getString("Date");
                    MedicalBooking mb = new MedicalBooking( bookingNumber, createDate, guestName, guestPhone, guestEmail, guestAddress, note, DepartmentName, ServiceName, Time, Date, guestIdentity );
                    listMb.add(mb);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        return listMb;
    }

//    public boolean isIdentityExited(String Identity) {
//        boolean result = false;
//        try {
//            con = DBUtils.makeConnection();
//            if (con != null) {
//                String sql = "select BookingId from MedicalBooking where  GuestIdentity='" + Identity + "'";
//                stm = con.prepareStatement(sql);
//                System.out.println(sql);
//                rs = stm.executeQuery();
//                while (rs.next()) {
//                    result = true;
//                }
//            }
//        } catch (ClassNotFoundException | SQLException ex) {
//            ex.printStackTrace();
//
//        } finally {
//            closeConnection();
//        }
//        return result;
//    }

    public String createBookingNumber(int BookingId, String date) throws SQLException {
        String result = "Success";
        int BookingNumber = 0;
        try {
            con = DBUtils.makeConnection();
            String sql = "Select top 1 m.BookingNumber\n"
                    + "from Time t,MedicalBooking m\n"
                    + "where t.Date=? AND t.TimeId=m.TimeId order by m.BookingNumber desc";
            stm = con.prepareStatement(sql);
            stm.setString(1, date);
            rs = stm.executeQuery();
            if (rs.next()) {
                try {
                    BookingNumber = rs.getInt("BookingNumber");
                } catch (Exception e) {
                    BookingNumber = 0;
                }
                BookingNumber = BookingNumber + 1;
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "update MedicalBooking set BookingNumber=? where BookingId=?";
                stm = con.prepareStatement(sql);
                stm.setInt(1, BookingNumber);
                stm.setInt(2, BookingId);
                stm.executeUpdate();
            }
        } catch (Exception e) {
            e.printStackTrace();
            result = "Failed";
        } finally {
            closeConnection();
        }
        return result;
    }
    public String createIntendTime(int BookingId) throws SQLException {
        String result = "Success";
        int BookingNumber= 0;
        String IntendTime = null;
        try {
            con = DBUtils.makeConnection();
            String sql = "Select BookingNumber from MedicalBooking where BookingId=?";
            stm = con.prepareStatement(sql);
            stm.setInt(1, BookingId);
            rs = stm.executeQuery();
            if (rs.next()) {
                BookingNumber = rs.getInt("BookingNumber");
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        try {
            if(BookingNumber <= 20){
                IntendTime="06:00:00";
            }
            else if(BookingNumber <= 40){
                IntendTime="08:00:00";
            }
            else if(BookingNumber <= 60){
                IntendTime="10:00:00";
            }
            else if(BookingNumber <= 80){
                IntendTime="13:00:00";
            }
            else if(BookingNumber <= 100){
                IntendTime="15:00:00";
            }
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "update MedicalBooking set IntendTime=? where BookingId=?";
                stm = con.prepareStatement(sql);
                stm.setString(1, IntendTime);
                stm.setInt(2, BookingId);
                stm.executeUpdate();
            }
        } catch (Exception e) {
            e.printStackTrace();
            result = "Failed";
        } finally {
            closeConnection();
        }
        return result;
    }
public List<MedicalBooking> getListByDate(String date, int serviceId) throws SQLException, ClassNotFoundException {
        List<MedicalBooking> listMb = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select d.DepartmentName,s.ServiceName,t.Date,m.GuestName,m.BookingNumber,"
                        + "m.IntendTime,m.CreateDate,m.GuestPhone,m.GuestEmail,m.GuestAddress,m.Note,m.GuestIdentity \n"
                        + "from Service s,Time t,Department d,MedicalBooking m \n"
                        + "where s.ServiceId=m.ServiceId and t.TimeId=m.TimeId and d.DepartmentId=m.DepartmentId"
                        + " and s.ServiceId="+serviceId+" and t.Date='"+date+"'";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    int bookingNumber = rs.getInt("BookingNumber");
                    String createDate = rs.getString("CreateDate");
                    String guestName = rs.getString("GuestName");
                    String guestPhone = rs.getString("GuestPhone");
                    String guestEmail = rs.getString("GuestEmail");
                    String guestAddress = rs.getString("GuestAddress");
                    String guestIdentity = rs.getString("GuestIdentity");
                    String note = rs.getString("Note");
                    String DepartmentName = rs.getString("DepartmentName");
                    String ServiceName = rs.getString("ServiceName");
                    String Time = rs.getString("IntendTime");
                    String Date = rs.getString("Date");
                    MedicalBooking mb = new MedicalBooking( bookingNumber, createDate, guestName, guestPhone, guestEmail, guestAddress, note, DepartmentName, ServiceName, Time, Date, guestIdentity );
                    listMb.add(mb);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        return listMb;
    }
    
}
