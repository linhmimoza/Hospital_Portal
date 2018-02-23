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
import Models.ShiftDay;


public class ShiftDayDAO implements Serializable {

    public List<ShiftDay> getShiftDays() throws SQLException, ClassNotFoundException {
        Connection con = null;
        PreparedStatement stm = null;
        ResultSet rs = null;

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
                    ShiftDay shiftDayTable = new ShiftDay(id, shiftDay, dayInWeek, shiftScheduleId);
                    listShiftDays.add(shiftDayTable);
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
        return listShiftDays;
    }
    
}
