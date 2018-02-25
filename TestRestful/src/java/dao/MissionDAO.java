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

public class MissionDAO implements Serializable {

    public List<Mission> getMissions() throws SQLException, ClassNotFoundException {
        Connection con = null;
        PreparedStatement stm = null;
        ResultSet rs = null;

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
                    Mission mission = new Mission(id, startDate, endDate, place, content, note, status, createDate, updateDate, createby, updateby);
                    listMissions.add(mission);
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
        return listMissions;
    }

}
