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
import Models.Role;
import java.util.logging.Level;
import java.util.logging.Logger;

public class RoleDAO implements Serializable {
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
    public List<Role> getRoles() {
     
        List<Role> listRoles = null;
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select RoleId, RoleName from Role";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("RoleId");
                    String roleName = rs.getString("RoleName");
                    Role role = new Role(id, roleName);
                    listRoles.add(role);
                }
            }
        } catch (ClassNotFoundException ex) {
        Logger.getLogger(RoleDAO.class.getName()).log(Level.SEVERE, null, ex);
    } catch (SQLException ex) {
        Logger.getLogger(RoleDAO.class.getName()).log(Level.SEVERE, null, ex);
    } finally {
          closeConnection();
        }
        return listRoles;
    }
}
