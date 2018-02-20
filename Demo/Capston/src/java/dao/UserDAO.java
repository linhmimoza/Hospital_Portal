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
import models.User;

public class UserDAO implements Serializable {

    public List<User> getUsers() throws SQLException, ClassNotFoundException {
        Connection con = null;
        PreparedStatement stm = null;
        ResultSet rs = null;

        List<User> listUsers = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select UserId, UserName, Password, Avatar, Email, FullName, Sex, DayOfBirth, "
                        + "DepartmentId, Phone, Position, Address, Certificate, Status from User";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("UserId");
                    String userName = rs.getString("UserName");
                    String password = rs.getString("Password");
                    String avatar = rs.getString("Avatar");
                    String email = rs.getString("Email");
                    String fullName = rs.getString("FullName");
                    int sex = rs.getInt("Sex");
                    String dayOfBirth = rs.getString("DayOfBirth");
                    Integer departmentId = rs.getInt("DepartmentId");
                    String phone = rs.getString("Phone");
                    String position = rs.getString("Position");
                    String address = rs.getString("Address");
                    String certificate = rs.getString("Certificate");
                    Integer status = rs.getInt("Status");
                    User user = new User(id, userName, password, email, fullName, sex, dayOfBirth, departmentId, phone, position, address, certificate, status);
                    listUsers.add(user);
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
        return listUsers;
    }
}
