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
import models.MissionWorker;

public class MissionWorkerDAO implements Serializable {

    public List<MissionWorker> getMissionWorkers() throws SQLException, ClassNotFoundException {
        Connection con = null;
        PreparedStatement stm = null;
        ResultSet rs = null;

        List<MissionWorker> listMissionWorkers = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select MissionWorkerId, MissionId, UserId from MissionWorker";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("MissionWorkerId");
                    Integer missionId = rs.getInt("MissionId");
                    Integer userId = rs.getInt("UserId");
                    MissionWorker missionWorker = new MissionWorker(id, missionId, userId);
                    listMissionWorkers.add(missionWorker);
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
        return listMissionWorkers;
    }

}
