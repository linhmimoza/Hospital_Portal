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
import Models.Room;
import java.util.logging.Level;
import java.util.logging.Logger;

public class RoomDAO implements Serializable {
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
    public List<Room> getRooms()  {

        List<Room> listRooms = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select RoomId, RoomName, RoomSize, Status from Room";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("RoomId");
                    String roomName = rs.getString("RoomName");
                    int roomSize = rs.getInt("RoomSize");
                    int status = rs.getInt("Status");
                    Room room = new Room(id, roomName, roomSize, status);
                    listRooms.add(room);
                }
            }
        } catch (ClassNotFoundException ex) {
        Logger.getLogger(RoomDAO.class.getName()).log(Level.SEVERE, null, ex);
    } catch (SQLException ex) {
        Logger.getLogger(RoomDAO.class.getName()).log(Level.SEVERE, null, ex);
    } finally {
       closeConnection();
        }
        return listRooms;
    }
    public Room getRoomById(int roomId)  {
     
       Room room = null;
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "select RoomId,RoomName,RoomSize,Status from Room where RoomId="+roomId;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                if (rs.next()) {
                    Integer id = rs.getInt("RoomId");
                    String roomName = rs.getString("RoomName");
                    Integer roomSize = rs.getInt("RoomSize");
                    Integer status = rs.getInt("Status");
                  room = new Room(id, roomName, roomSize,status);

                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
       closeConnection();
        }
        return room;
    }
     public String updateRoom(Room room) {
        String result = "Susscess";
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "update Room set RoomName='"+room.getRoomName().trim()+"',RoomSize="
                        + room.getRoomSize()+",Status="+room.getStatus()+" where RoomId="+room.getRoomId();           
                stm = con.prepareStatement(sql);
                stm.executeUpdate();

            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
            result = "Failed";
        } finally {
            closeConnection();
        }
        return result;
    }
    public String createRoom(Room room) {
        String result = "Susscess";
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "insert into Room(RoomName,RoomSize,Status) values('"+room.getRoomName().trim()+"',"+room.getRoomSize()+",1)";           
                stm = con.prepareStatement(sql);
                stm.executeUpdate();
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
            result = "Failed";
        } finally {
            closeConnection();
        }
        return result;
    }
}
