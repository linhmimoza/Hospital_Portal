/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import Models.Category;
import Models.ShiftWorker;

public class ShiftWorkerDAO implements Serializable {

    public List<ShiftWorker> getShiftWorkers() throws SQLException, ClassNotFoundException {
        Connection con = null;
        PreparedStatement stm = null;
        ResultSet rs = null;

        List<ShiftWorker> listShiftWorkers = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select ShiftWorkerId, ShiftId, UserId from ShiftWorker";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("ShiftWorkerId");
                    Integer shiftId = rs.getInt("ShiftId");
                    Integer userId = rs.getInt("UserId");
                    ShiftWorker shiftWorker = new ShiftWorker(id, shiftId,userId);
                    listShiftWorkers.add(shiftWorker);
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
        return listShiftWorkers;
    }

}
