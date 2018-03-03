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
import Models.Category;
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
}
