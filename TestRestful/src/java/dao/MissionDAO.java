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
import Models.Mission;
import Models.MissionWorker;
import java.util.logging.Level;
import java.util.logging.Logger;

public class MissionDAO implements Serializable {
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
    public List<Mission> getMissions() {
        List<Mission> listMissions = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select MissionId, StartDate, EndDate, Place, Content, Note, Status, Createby, CreateDate, "
                        + "Updateby, UpdateDate from Mission";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("MissionId");
                    String startDate = rs.getString("StartDate");
                    String endDate = rs.getString("EndDate");
                    String place = rs.getString("Place");
                    String content = rs.getString("Content");
                    String note = rs.getString("Note");
                    Integer status = rs.getInt("Status");
                    Integer createby = rs.getInt("Createby");
                    Date createDate = rs.getDate("CreateDate");
                    Integer updateby = rs.getInt("Updateby");
                    Date updateDate = rs.getDate("UpdateDate");
                    MissionWorkerDAO dao =new MissionWorkerDAO();
                    List <MissionWorker> listWorker=dao.getMissionWorkersById(id);
                    Mission mission = new Mission(id, startDate, endDate, place, content, note, status, createDate, updateDate, listWorker,createby, updateby);
                    listMissions.add(mission);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
        Logger.getLogger(MissionDAO.class.getName()).log(Level.SEVERE, null, ex);
    } finally {
closeConnection();
        }
        return listMissions;
    }
 public Mission getMissionById(int missionId) {
       Mission mission= new Mission();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select MissionId, StartDate, EndDate, Place, Content, Note, Status, Createby, CreateDate, "
                        + "Updateby, UpdateDate from Mission where MissionId="+missionId;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                if (rs.next()) {
                    Integer id = rs.getInt("MissionId");
                    String startDate = rs.getString("StartDate");
                    String endDate = rs.getString("EndDate");
                    String place = rs.getString("Place");
                    String content = rs.getString("Content");
                    String note = rs.getString("Note");
                    Integer status = rs.getInt("Status");
                    Integer createby = rs.getInt("Createby");
                    Date createDate = rs.getDate("CreateDate");
                    Integer updateby = rs.getInt("Updateby");
                    Date updateDate = rs.getDate("UpdateDate");
                    MissionWorkerDAO dao =new MissionWorkerDAO();
                    List <MissionWorker> listWorker=dao.getMissionWorkersById(id);
                    mission = new Mission(id, startDate, endDate, place, content, note, status, createDate, updateDate, listWorker,createby, updateby);

                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
        Logger.getLogger(MissionDAO.class.getName()).log(Level.SEVERE, null, ex);
    } finally {
closeConnection();
        }
        return mission;
    }
}
