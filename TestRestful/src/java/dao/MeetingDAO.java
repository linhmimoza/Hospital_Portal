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

    public List<Meeting> getMeetings() {

        List<Meeting> listMeetings = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select MeetingId, m.RoomId,r.RoomName, MeetingName, StartTime, Date,Duration, Content, Note, CreateBy,CreateDate,\n"
                        + " UpdateBy, UpdateDate, m.Status from Meeting m, Room r where  m.RoomId=r.RoomId ORDER BY Date,StartTime";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("MeetingId");
                    Integer roomId = rs.getInt("RoomId");
                    String meetingName = rs.getString("MeetingName");
                    String startTime = rs.getString("StartTime").substring(0, 5);
                    String date = rs.getString("Date");
                    String duration = rs.getString("Duration");
                    if (duration!=null){
                        duration=duration.substring(0, 5);
                    }
                    String content = rs.getString("Content");
                    String note = rs.getString("Note");
                    Integer createBy = rs.getInt("CreateBy");
                    Date createDate = rs.getDate("CreateDate");
                    Integer updateBy = rs.getInt("UpdateBy");
                    Date updateDate = rs.getDate("UpdateDate");
                    Integer status = rs.getInt("Status");
                    String roomName = rs.getString("RoomName");
                    Meeting meeting = new Meeting(id, meetingName, startTime, duration, date, content, note, createDate, updateDate, status, roomId, roomName, createBy, updateBy);
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

    public List<Meeting> getFutureMeetings(int page) {
 int rows=3*page;
        List<Meeting> listMeetings = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                TimeEditor time = new TimeEditor();
                String now = time.getDate();
                String sql = "Select MeetingId, m.RoomId,r.RoomName, MeetingName, StartTime, Date,Duration, Content, Note, CreateBy,CreateDate,\n"
                        + " UpdateBy, UpdateDate, m.Status from Meeting m, Room r where  m.Status=2 and m.RoomId=r.RoomId and m.Date>='" + now + "' ORDER BY Date,StartTime"
                         + " OFFSET 0 ROWS\n"
                        + "FETCH NEXT "+rows+" ROWS ONLY;";
             
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("MeetingId");
                    Integer roomId = rs.getInt("RoomId");
                    String meetingName = rs.getString("MeetingName");
                    String startTime = rs.getString("StartTime").substring(0, 5);
                    String date = rs.getString("Date");
                    String duration = rs.getString("Duration");
                    if (duration!=null){
                        duration=duration.substring(0, 5);
                    }
                    String content = rs.getString("Content");
                    String note = rs.getString("Note");
                    Integer createBy = rs.getInt("CreateBy");
                    Date createDate = rs.getDate("CreateDate");
                    Integer updateBy = rs.getInt("UpdateBy");
                    Date updateDate = rs.getDate("UpdateDate");
                    Integer status = rs.getInt("Status");
                    String roomName = rs.getString("RoomName");
                    Meeting meeting = new Meeting(id, meetingName, startTime, duration, date, content, note, createDate, updateDate, status, roomId, roomName, createBy, updateBy);
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

    public List<Meeting> getPassMeetings(int page) {
        int rows=3*page;
        List<Meeting> listMeetings = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                TimeEditor time = new TimeEditor();
                String now = time.getDate();
                String sql = "Select 10 MeetingId, m.RoomId,r.RoomName, MeetingName, StartTime, Date,Duration, Content, Note, CreateBy,CreateDate,\n"
                        + " UpdateBy, UpdateDate, m.Status from Meeting m, Room r where  m.Status=2 and  m.RoomId=r.RoomId and m.Date<'" + now + "' ORDER BY Date DESC,StartTime DESC"
                        + " OFFSET 0 ROWS\n"
                        + "FETCH NEXT "+rows+" ROWS ONLY;";
     
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("MeetingId");
                    Integer roomId = rs.getInt("RoomId");
                    String meetingName = rs.getString("MeetingName");
                    String startTime = rs.getString("StartTime").substring(0, 5);
                    String date = rs.getString("Date");
                    String duration = rs.getString("Duration");
                    if (duration!=null){
                        duration=duration.substring(0, 5);
                    }
                    String content = rs.getString("Content");
                    String note = rs.getString("Note");
                    Integer createBy = rs.getInt("CreateBy");
                    Date createDate = rs.getDate("CreateDate");
                    Integer updateBy = rs.getInt("UpdateBy");
                    Date updateDate = rs.getDate("UpdateDate");
                    Integer status = rs.getInt("Status");
                    String roomName = rs.getString("RoomName");
                    Meeting meeting = new Meeting(id, meetingName, startTime, duration, date, content, note, createDate, updateDate, status, roomId, roomName, createBy, updateBy);
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
 public List<Meeting> getCheckedMeetings() {

        List<Meeting> listMeetings = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select MeetingId, m.RoomId,r.RoomName, MeetingName, StartTime,\n" +
" Date,Duration, Content, Note, CreateBy,CreateDate,\n" +
"UpdateBy, UpdateDate, m.Status from Meeting m, Room r where  m.RoomId=r.RoomId\n" +
"and m.Status>1 ORDER BY CreateDate";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("MeetingId");
                    Integer roomId = rs.getInt("RoomId");
                    String meetingName = rs.getString("MeetingName");
                    String startTime = rs.getString("StartTime").substring(0, 5);
                    String date = rs.getString("Date");
                    String duration = rs.getString("Duration");
                    if (duration!=null){
                        duration=duration.substring(0, 5);
                    }
                    String content = rs.getString("Content");
                    String note = rs.getString("Note");
                    Integer createBy = rs.getInt("CreateBy");
                    Date createDate = rs.getDate("CreateDate");
                    Integer updateBy = rs.getInt("UpdateBy");
                    Date updateDate = rs.getDate("UpdateDate");
                    Integer status = rs.getInt("Status");
                    String roomName = rs.getString("RoomName");
                    Meeting meeting = new Meeting(id, meetingName, startTime, duration, date, content, note, createDate, updateDate, status, roomId, roomName, createBy, updateBy);
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
 public List<Meeting> getWaitingMeetings() {

        List<Meeting> listMeetings = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select MeetingId, m.RoomId,r.RoomName, MeetingName, StartTime,\n" +
" Date,Duration, Content, Note, CreateBy,CreateDate,\n" +
"UpdateBy, UpdateDate, m.Status from Meeting m, Room r where  m.RoomId=r.RoomId\n" +
"and m.Status=1 ORDER BY CreateDate";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("MeetingId");
                    Integer roomId = rs.getInt("RoomId");
                    String meetingName = rs.getString("MeetingName");
                    String startTime = rs.getString("StartTime").substring(0, 5);
                    String date = rs.getString("Date");
                    String duration = rs.getString("Duration");
                    if (duration!=null){
                        duration=duration.substring(0, 5);
                    }
                    String content = rs.getString("Content");
                    String note = rs.getString("Note");
                    Integer createBy = rs.getInt("CreateBy");
                    Date createDate = rs.getDate("CreateDate");
                    Integer updateBy = rs.getInt("UpdateBy");
                    Date updateDate = rs.getDate("UpdateDate");
                    Integer status = rs.getInt("Status");
                    String roomName = rs.getString("RoomName");
                    Meeting meeting = new Meeting(id, meetingName, startTime, duration, date, content, note, createDate, updateDate, status, roomId, roomName, createBy, updateBy);
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
public List<Meeting> getMeetingInRange(String from,String to, int status) {

        List<Meeting> listMeetings = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select MeetingId, m.RoomId,r.RoomName, MeetingName, StartTime,\n" +
" Date,Duration, Content, Note, CreateBy,CreateDate,\n" +
" UpdateBy, UpdateDate, m.Status from Meeting m, Room r where  m.RoomId=r.RoomId\n" +
" and m.Status="+status+" and (Date>='"+from+"') and (Date <'"+to+"') ORDER BY CreateDate";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("MeetingId");
                    Integer roomId = rs.getInt("RoomId");
                    String meetingName = rs.getString("MeetingName");
                    String startTime = rs.getString("StartTime").substring(0, 5);
                    String date = rs.getString("Date");
                    String duration = rs.getString("Duration");
                    if (duration!=null){
                        duration=duration.substring(0, 5);
                    }
                    String content = rs.getString("Content");
                    String note = rs.getString("Note");
                    Integer createBy = rs.getInt("CreateBy");
                    Date createDate = rs.getDate("CreateDate");
                    Integer updateBy = rs.getInt("UpdateBy");
                    Date updateDate = rs.getDate("UpdateDate");
                     status = rs.getInt("Status");
                    String roomName = rs.getString("RoomName");
                    Meeting meeting = new Meeting(id, meetingName, startTime, duration, date, content, note, createDate, updateDate, status, roomId, roomName, createBy, updateBy);
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
