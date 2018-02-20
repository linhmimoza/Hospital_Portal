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
import models.Category;
import models.ShiftSchedule;

public class ShiftScheduleDAO implements Serializable {

    public List<ShiftSchedule> getShiftSchedules() throws SQLException, ClassNotFoundException {
        Connection con = null;
        PreparedStatement stm = null;
        ResultSet rs = null;

        List<ShiftSchedule> listShiftSchedules = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select ShiftScheduleId, DepartmentId, StartDate, EndDate, Status, "
                        + "Createby, CreateDate, UpdateDate, Updateby from ShiftSchedule";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("ShiftScheduleId");
                    Integer departmentId = rs.getInt("DepartmentId");
                    String startDate = rs.getString("StartDate");
                    String endDate = rs.getString("EndDate");                    
                    Date createDate = rs.getDate("CreateDate");
                    Date updateDate = rs.getDate("UpdateDate");
                    Integer status = rs.getInt("Status");
                    Integer createby = rs.getInt("Createby");
                    Integer updateby = rs.getInt("Updateby");
                    ShiftSchedule shiftSchedule = new ShiftSchedule(id, startDate, endDate, status, createDate, updateDate, departmentId, createby, updateby);
                    listShiftSchedules.add(shiftSchedule);
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
        return listShiftSchedules;
    }
}
