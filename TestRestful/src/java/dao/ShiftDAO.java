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
import Models.Shift;
import Models.ShiftWorker;
import java.util.logging.Level;
import java.util.logging.Logger;


public class ShiftDAO implements Serializable {

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
    public List<Shift> getShifts() {
        List<Shift> listShifts = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select ShiftId, ShiftNO, StartTime, EndTime, ShiftDayID, Other from Shift";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("ShiftId");
                    Integer shiftNO = rs.getInt("ShiftNO");
                    String startTime = rs.getString("StartTime");
                    String endTime = rs.getString("EndTime");
                    Integer shiftDayID = rs.getInt("ShiftDayID");
                    String other = rs.getString("Other");       
                    ShiftWorkerDAO dao=new ShiftWorkerDAO();
                    List<ShiftWorker> listShiftWorkers=dao.getWorkersByShiftId(id);
                    Shift shift = new Shift(id, shiftNO, startTime, endTime, shiftDayID, other,listShiftWorkers);
                    listShifts.add(shift);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(ShiftDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
   closeConnection();
        }
        return listShifts;
    }
        public List<Shift> getShiftByDateId(int dateId) {
        List<Shift> listShifts = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select ShiftId, ShiftNO, StartTime, EndTime, ShiftDayID, Other from Shift where ShiftDayId="+dateId;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("ShiftId");
                    Integer shiftNO = rs.getInt("ShiftNO");
                    String startTime = rs.getString("StartTime").substring(0, 5);
                    String endTime = rs.getString("EndTime").substring(0, 5);
                    Integer shiftDayID = rs.getInt("ShiftDayID");
                    String other = rs.getString("Other");       
                    ShiftWorkerDAO dao=new ShiftWorkerDAO();
                    List<ShiftWorker> listShiftWorkers=dao.getWorkersByShiftId(id);
                    Shift shift = new Shift(id, shiftNO, startTime, endTime, shiftDayID, other,listShiftWorkers);
                    listShifts.add(shift);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(ShiftDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
   closeConnection();
        }
        return listShifts;
    }
          public void createShift(Shift shift,int dayId) {

        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "insert into Shift(ShiftNO,StartTime,EndTime,ShiftDayID,Other) OUTPUT INSERTED.ShiftId"
                        + " values("+shift.getShiftNO()+",'"+shift.getStartTime()+"','"+shift.getEndTime()+"'"
                        + ","+dayId+",'"+shift.getOther()+"')";           
                stm = con.prepareStatement(sql);
           
                 rs = stm.executeQuery();
             
                if (rs.next()) {
                    int shiftID = rs.getInt("ShiftId");
                    ShiftWorkerDAO dao= new ShiftWorkerDAO();            
                    dao.createWorker(shift.getShiftWorkerList(), shiftID);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);

        } finally {
            closeConnection();
        }

    }

}
