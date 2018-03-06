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
import Models.ShiftWorker;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ShiftWorkerDAO implements Serializable {

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
    public List<ShiftWorker> getShiftWorkers()  {
     
        List<ShiftWorker> listShiftWorkers = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select ShiftWorkerId, ShiftId, w.UserId, u.UserName from ShiftWorker w, [User] u where u.UserId=w.UserId";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("ShiftWorkerId");
                    Integer shiftId = rs.getInt("ShiftId");
                    Integer userId = rs.getInt("UserId");
                    String userName=rs.getString("UserName");
                    ShiftWorker shiftWorker = new ShiftWorker(id, shiftId,userId,userName);
                    listShiftWorkers.add(shiftWorker);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(ShiftWorkerDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
         closeConnection();
        }
        return listShiftWorkers;
    }
public List<ShiftWorker> getWorkersByShiftId(int shiftId)  {
     
        List<ShiftWorker> listShiftWorkers = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select ShiftWorkerId, ShiftId, w.UserId, u.UserName from ShiftWorker w, [User] u "
                        + "where u.UserId=w.UserId and w.ShiftId="+shiftId;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("ShiftWorkerId");
                    Integer userId = rs.getInt("UserId");
                    String userName=rs.getString("UserName");
                    ShiftWorker shiftWorker = new ShiftWorker(id, shiftId,userId,userName);
                    listShiftWorkers.add(shiftWorker);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(ShiftWorkerDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
         closeConnection();
        }
        return listShiftWorkers;
    }
}
