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
import models.Meeting;

public class MeetingDAO implements Serializable {

    public List<Meeting> getMeetings() throws SQLException, ClassNotFoundException {
        Connection con = null;
        PreparedStatement stm = null;
        ResultSet rs = null;

        List<Meeting> listMeetings = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select MeetingId, RoomId, MeetingName, StartTime, EndTime, Content, Note, CreateBy, "
                        + "CreateDate, UpdateBy, UpdateDate, Status from Meeting";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("MeetingId");
                    Integer roomId = rs.getInt("RoomId");
                    String meetingName = rs.getString("MeetingName");
                    Date startTime = rs.getDate("StartTime");
                    Date endTime = rs.getDate("EndTime");
                    String content = rs.getString("Content");
                    String note = rs.getString("Note");
                    Integer createBy = rs.getInt("CreateBy");
                    Date createDate = rs.getDate("CreateDate");
                    Integer updateBy = rs.getInt("UpdateBy");
                    Date updateDate = rs.getDate("UpdateDate");
                    Integer status = rs.getInt("Status");
                    Meeting meeting = new Meeting(id, meetingName, startTime, endTime, content, note, createDate, updateDate, status, roomId, createBy, updateBy);
                    listMeetings.add(meeting);
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
        return listMeetings;
    }

}
