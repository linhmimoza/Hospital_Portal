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

    public List<UserRole> getUserRoles() throws SQLException, ClassNotFoundException {
        Connection con = null;
        PreparedStatement stm = null;
        ResultSet rs = null;

        List<UserRole> listUserRoles = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select RoleId, UserId, Status from UserRole";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer roleId = rs.getInt("RoleId");
                    Integer userId = rs.getInt("UserId");
                    boolean status = rs.getBoolean("Status");
                    UserRole userRole = new UserRole(status, roleId, userId);
                    listUserRoles.add(userRole);
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
        return listUserRoles;
    }

}
