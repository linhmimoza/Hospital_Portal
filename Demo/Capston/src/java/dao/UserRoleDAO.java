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
import models.UserRole;

public class UserRoleDAO implements Serializable {
   Connection con = null;
    PreparedStatement stm = null;
    ResultSet rs = null;

    public void closeConnection() throws SQLException {
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

    public List<UserRole> getUserRoles() throws SQLException, ClassNotFoundException {
 
        List<UserRole> listUserRoles = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select ur.RoleId, ur.UserId, ur.Status, r.RoleName from UserRole ur, Role r  where ur.RoleId=r.RoleId";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer roleId = rs.getInt("RoleId");
                    Integer userId = rs.getInt("UserId");
                    boolean status = rs.getBoolean("Status");
                    String roleName = rs.getString("RoleName");
                    UserRole userRole = new UserRole(status, roleId, userId,roleName);
                    listUserRoles.add(userRole);                   
                }
            }
        } finally {
         closeConnection();
        }
        return listUserRoles;
    }
 public List<UserRole> getRolesByUserId(int id) throws SQLException, ClassNotFoundException {
 
        List<UserRole> listUserRoles = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select ur.RoleId, ur.UserId, ur.Status, r.RoleName from UserRole ur, Role r  where ur.RoleId=r.RoleId and ur.UserId="+id;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer roleId = rs.getInt("RoleId");
                    Integer userId = rs.getInt("UserId");
                    boolean status = rs.getBoolean("Status");
                    String roleName = rs.getString("RoleName");
                    UserRole userRole = new UserRole(status, roleId, userId,roleName);
                    listUserRoles.add(userRole);                   
                }
            }
        } finally {
         closeConnection();
        }
        return listUserRoles;
    }
}
