/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import Function.TimeEditor;
import java.io.Serializable;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import Models.ShiftDay;
import Models.ShiftSchedule;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ShiftScheduleDAO implements Serializable {
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
    public List<ShiftSchedule> getShiftSchedules()  {
   

        List<ShiftSchedule> listShiftSchedules = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select ShiftScheduleId, DepartmentId,  Status, "
                        + "Createby, CreateDate, UpdateDate, Updateby from ShiftSchedule";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("ShiftScheduleId");
                    Integer departmentId = rs.getInt("DepartmentId");
                           
                    String createDate = rs.getString("CreateDate");
                    String updateDate = rs.getString("UpdateDate");
                    Integer status = rs.getInt("Status");
                    Integer createby = rs.getInt("Createby");
                    Integer updateby = rs.getInt("Updateby");
                    ShiftDayDAO dao= new ShiftDayDAO();
                    List<ShiftDay> listShiftDays=dao.getShiftDaysBySchedulerId(id);
                    ShiftSchedule shiftSchedule = new ShiftSchedule(id, status, createDate, updateDate, departmentId, createby, updateby,listShiftDays);
                    listShiftSchedules.add(shiftSchedule);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
         Logger.getLogger(ShiftScheduleDAO.class.getName()).log(Level.SEVERE, null, ex);
     } finally {
      closeConnection();
        }
        return listShiftSchedules;
    }
    public String createShiftScheduler(ShiftSchedule scheduler) {
        String result = "Sussces";
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                 TimeEditor time= new TimeEditor();
                String sql = "insert into ShiftSchedule(DepartmentId,Status,Createby,CreateDate,UpdateDate,Updateby,[Week])\n" +
" OUTPUT INSERTED.ShiftScheduleId\n" +
"values("+scheduler.getDepartmentId()+",1,"+scheduler.getCreateby()+","
                        + "'"+time.getTime()+"','"+time.getTime()+"',"+scheduler.getUpdateby()+",'"+scheduler.getWeek()+"')";           
                stm = con.prepareStatement(sql);
               
                rs = stm.executeQuery();
                if (rs.next()) {
                    int shiftScheduleId = rs.getInt("ShiftScheduleId");
                    ShiftDayDAO dao = new ShiftDayDAO();
                    for (ShiftDay day:scheduler.getShiftDayList()){
                    dao.createShiftDay(day, shiftScheduleId);}
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
            result = "fail";
        } finally {
            closeConnection();
        }
        return result;
    }
}
