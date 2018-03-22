/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import Models.Category;
import Models.Shift;
import Models.ShiftDay;
import java.util.logging.Level;
import java.util.logging.Logger;


public class ShiftDayDAO implements Serializable {
 Connection con = null;
    PreparedStatement stm = null;
    ResultSet rs = null;

    public void closeConnection() {

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
        } catch (SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        }

    }
    public List<ShiftDay> getShiftDays()  {
 
        List<ShiftDay> listShiftDays = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select ShiftDayId, ShiftDay, DayInWeek, ShiftScheduleId from ShiftDay";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("ShiftDayId");
                    String shiftDay = rs.getString("ShiftDay");
                    String dayInWeek = rs.getString("DayInWeek");
                    Integer shiftScheduleId = rs.getInt("ShiftScheduleId"); 
                    ShiftDAO dao=new ShiftDAO();
                    List<Shift> listShifts=dao.getShiftByDateId(id);
                    ShiftDay shiftDayTable = new ShiftDay(id, shiftDay, dayInWeek, shiftScheduleId,listShifts);
                    listShiftDays.add(shiftDayTable);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
         Logger.getLogger(ShiftDayDAO.class.getName()).log(Level.SEVERE, null, ex);
     } finally {
     closeConnection();
        }
        return listShiftDays;
    }
    public List<ShiftDay> getShiftDaysBySchedulerId(int SchedulerId)  {
 
        List<ShiftDay> listShiftDays = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select ShiftDayId, ShiftDay, DayInWeek, ShiftScheduleId from ShiftDay where ShiftScheduleId="+SchedulerId;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("ShiftDayId");
                    String shiftDay = rs.getString("ShiftDay");
                    String dayInWeek = rs.getString("DayInWeek");
                    Integer shiftScheduleId = rs.getInt("ShiftScheduleId"); 
                    ShiftDAO dao=new ShiftDAO();
                    List<Shift> listShifts=dao.getShiftByDateId(id);
                    ShiftDay shiftDayTable = new ShiftDay(id, shiftDay, dayInWeek, shiftScheduleId,listShifts);
                    listShiftDays.add(shiftDayTable);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
         Logger.getLogger(ShiftDayDAO.class.getName()).log(Level.SEVERE, null, ex);
     } finally {
     closeConnection();
        }
        return listShiftDays;
    }
    public void createShiftDay(ShiftDay day,int scheduleId) {

        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "insert into ShiftDay(ShiftDay,DayInWeek,ShiftScheduleId)\n" +
" OUTPUT INSERTED.ShiftDayID\n" +
" values('"+day.getShiftDay()+"','"+day.getDayInWeek()+"',"+scheduleId+")";           
                stm = con.prepareStatement(sql);
                 rs = stm.executeQuery();
                  System.out.println(sql);
                if (rs.next()) {
                    int shiftDayID = rs.getInt("ShiftDayID");
                    ShiftDAO dao = new ShiftDAO();
                  for (Shift shift:day.getShiftList()){
                     dao.createShift(shift, shiftDayID);
                  }}
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);

        } finally {
            closeConnection();
        }

    }
}
