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

    public String createMedicalBooking(int DepartmentId, int ServiceId, int TimeId, String CreateDate, String GuestName, String GuestPhone, String GuestEmail, String GuestAddress, int GuestIdentity, String Note) throws SQLException {

        String result = "Success";
        if (isIdentityExited(GuestIdentity)) {
            result = "Identity existed";
        } else {
            try {
                con = DBUtils.makeConnection();
                if (con != null) {
                    String sql = "insert into MedicalBooking(DepartmentId,ServiceId,TimeId,CreateDate,GuestName,GuestPhone,GuestEmail,GuestAddress,GuestIdentity,Note)values(?,?,?,?,?,?,?,?,?,?)";
                    stm = con.prepareStatement(sql);
                    stm.setInt(1, DepartmentId);
                    stm.setInt(2, ServiceId);
                    stm.setInt(3, TimeId);
                    stm.setString(4, CreateDate);
                    stm.setString(5, GuestName);
                    stm.setString(6, GuestPhone);
                    stm.setString(7, GuestEmail);
                    stm.setString(8, GuestAddress);
                    stm.setInt(9, GuestIdentity);
                    stm.setString(10, Note);
                    stm.executeUpdate();
                }
            } catch (Exception e) {
                e.printStackTrace();
                result = "Failed";
            } finally {
                closeConnection();
            }
        }
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

    public List<MedicalBooking> getListMb(int guestIdentity) throws SQLException, ClassNotFoundException {
        List<MedicalBooking> listMb = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select d.DepartmentName,s.ServiceName,t.Time,t.Date \n"
                        + "from Service s,Time t,Department d,MedicalBooking m \n"
                        + "where m.GuestIdentity=? and s.ServiceId=m.ServiceId and t.TimeId=m.TimeId and d.DepartmentId=m.DepartmentId";
                stm = con.prepareStatement(sql);
                stm.setInt(1, guestIdentity);
                rs = stm.executeQuery();
                while (rs.next()) {
                    String DepartmentName = rs.getString("DepartmentName");
                    String ServiceName = rs.getString("ServiceName");
                    String Time = rs.getString("Time");
                    String Date = rs.getString("Date");
                    MedicalBooking mb = new MedicalBooking(DepartmentName, ServiceName, Time, Date);
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

    public boolean isIdentityExited(int Identity) {
        boolean result = false;
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "select BookingId from MedicalBooking where  GuestIdentity=" + Identity;
                stm = con.prepareStatement(sql);
                System.out.println(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    result = true;
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            ex.printStackTrace();

        } finally {
            closeConnection();
        }
        return result;
    }

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

}
