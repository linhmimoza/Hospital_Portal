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
import models.Shift;


public class ShiftDAO implements Serializable {

    public List<Shift> getShifts() throws SQLException, ClassNotFoundException {
        Connection con = null;
        PreparedStatement stm = null;
        ResultSet rs = null;

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
                    Shift shift = new Shift(id, shiftNO, startTime, endTime, shiftDayID, other);
                    listShifts.add(shift);
                }
            }
        } finally {
            if (rs != null) {
                rs.close();
            }
            if (stm != null) {
                stm.close();
            }
            if (con != null) {
                con.close();
            }
        }
        return listShifts;
    }
}
