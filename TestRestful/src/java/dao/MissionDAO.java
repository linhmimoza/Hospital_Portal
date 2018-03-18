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
import Models.Category;
import Models.Mission;
import Models.MissionWorker;
import java.util.AbstractList;
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
                    String createDate = rs.getString("CreateDate");
                    Integer updateby = rs.getInt("Updateby");
                    String updateDate = rs.getString("UpdateDate");
                    MissionWorkerDAO dao = new MissionWorkerDAO();
                    List<MissionWorker> listWorker = dao.getMissionWorkersById(id);
                    Mission mission = new Mission(id, startDate, endDate, place, content, note, status, createDate, updateDate, listWorker, createby, updateby);
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
        Mission mission = null;
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select MissionId, StartDate, EndDate, Place, Content, Note, Status, Createby, CreateDate, "
                        + "Updateby, UpdateDate from Mission where MissionId=" + missionId;
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
                    String createDate = rs.getString("CreateDate");
                    Integer updateby = rs.getInt("Updateby");
                    String updateDate = rs.getString("UpdateDate");
                    MissionWorkerDAO dao = new MissionWorkerDAO();
                    List<MissionWorker> listWorker = dao.getMissionWorkersById(id);
                    mission = new Mission(id, startDate, endDate, place, content, note, status, createDate, updateDate, listWorker, createby, updateby);

                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(MissionDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            closeConnection();
        }
        return mission;
    }

    public String createMission(Mission mission) {
        String result = "Susscess";

        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                TimeEditor time= new TimeEditor();
                String sql = "insert into Mission(Content,Createby,CreateDate,EndDate,Note,Place,StartDate,Status,Updateby,UpdateDate) OUTPUT INSERTED.MissionId\n"
                        + "values('" + mission.getContent() + "'," + mission.getCreateby() + ",'" + time.getTime() + "','" + mission.getEndDate() + "',"
                        + "'" + mission.getNote() + "','" + mission.getPlace() + "','" + mission.getStartDate() + "'"
                        + ",1," + mission.getCreateby()+ ",'" + time.getTime()+ "')";
      
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                if (rs.next()) {
                    int missionId = rs.getInt("MissionId");
                    MissionWorkerDAO dao = new MissionWorkerDAO();
                    dao.createMissionWorker(mission.getMissionWorkerList(), missionId);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
            result = "Failed";
        } finally {
            closeConnection();
        }
        return result;
    }

    public String updateMission(Mission mission) {
        String result = "Susscess";

        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                     TimeEditor time= new TimeEditor();
                String sql = "update Mission set Content='"+mission.getContent()
                        + ",EndDate='"+mission.getEndDate()+"',Note='"+mission.getNote()+"'\n"
                        + ",Place='"+mission.getPlace()+"',StartDate='"+mission.getStartDate()+"',"
                        + "Status="+mission.getStatus()+",Updateby="+mission.getUpdateby()+","
                        + "UpdateDate='"+time.getTime()+"' where MissionId="+mission.getMissionId();        
                stm = con.prepareStatement(sql);
                stm.executeUpdate();
                MissionWorkerDAO dao = new MissionWorkerDAO();
                dao.createMissionWorker(mission.getMissionWorkerList(), mission.getMissionId());

            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
            result = "Failed";
        } finally {
            closeConnection();
        }
        return result;
    }
 public List<Mission> getMissionByUser(int userId) {
        List<Mission>  listMission = new ArrayList<>();
        try {
          con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
         String   sql = "Select m.MissionId, StartDate, EndDate, Place, Content, Note, Status, Createby, CreateDate, \n" +
"Updateby, UpdateDate from Mission m, MissionWorker w where\n" +
" m.MissionId=w.MissionId  and m.Status=2 and w.UserId="+userId+" ORDER BY m.StartDate,m.EndDate";
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
                    String createDate = rs.getString("CreateDate");
                    Integer updateby = rs.getInt("Updateby");
                    String updateDate = rs.getString("UpdateDate");
                    MissionWorkerDAO dao = new MissionWorkerDAO();
                    List<MissionWorker> listWorker = dao.getMissionWorkersById(id);
                    Mission mission = new Mission(id, startDate, endDate, place, content, note, status, createDate, updateDate, listWorker, createby, updateby);
                    listMission.add(mission); 
                } 
                }
            
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(MissionDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            closeConnection();
        }
        return listMission;
    }

}
