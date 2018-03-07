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
import Models.Meeting;
import java.util.logging.Level;
import java.util.logging.Logger;

public class MeetingDAO implements Serializable {
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
    public List<Meeting> getMeetings()  {
    

        List<Meeting> listMeetings = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select MeetingId, m.RoomId,r.RoomName, MeetingName, StartTime, EndTime, Content, Note, CreateBy,CreateDate,\n" +
" UpdateBy, UpdateDate, m.Status from Meeting m, Room r where  m.RoomId=r.RoomId";
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
                    String roomName= rs.getString("RoomName");
                    Meeting meeting = new Meeting(id, meetingName, startTime, endTime, content, note, createDate, updateDate, status, roomId,roomName, createBy, updateBy);
                    listMeetings.add(meeting);
                }
            }
        } catch (ClassNotFoundException ex) {
         Logger.getLogger(MeetingDAO.class.getName()).log(Level.SEVERE, null, ex);
     } catch (SQLException ex) {
         Logger.getLogger(MeetingDAO.class.getName()).log(Level.SEVERE, null, ex);
     } finally {
  closeConnection();
        }
        return listMeetings;
    }

}
