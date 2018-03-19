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
import Models.MissionWorker;
import java.util.logging.Level;
import java.util.logging.Logger;

public class MissionWorkerDAO implements Serializable {
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
    public List<MissionWorker> getMissionWorkersById(int missionId) {
  

        List<MissionWorker> listMissionWorkers = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select MissionWorkerId, MissionId, m.UserId,u.UserName from"
                        + " MissionWorker m,[User] u  where m.UserId=u.UserId and MissionId="+missionId;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("MissionWorkerId");
                    missionId = rs.getInt("MissionId");
                    Integer userId = rs.getInt("UserId");
                    String userName=rs.getString("UserName");
                    MissionWorker missionWorker = new MissionWorker(id, missionId, userId, userName);
                    listMissionWorkers.add(missionWorker);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
        Logger.getLogger(MissionWorkerDAO.class.getName()).log(Level.SEVERE, null, ex);
    } finally {
       closeConnection();
        }
        return listMissionWorkers;
    }
    

 public boolean createMissionWorker(List<MissionWorker> listWorker, int missionId) {
        boolean result = true;
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "delete MissionWorker where MissionId="+missionId;           
                stm = con.prepareStatement(sql);
                stm.executeUpdate();
                for(MissionWorker worker:listWorker){
                    sql="insert into MissionWorker(MissionId,UserId) values("+missionId+","+worker.getUserId()+")";
                    stm = con.prepareStatement(sql);
                stm.executeUpdate();
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
            result = false;
        } finally {
            closeConnection();
        }
        return result;
    }
}
