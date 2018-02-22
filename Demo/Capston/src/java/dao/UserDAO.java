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
import models.UserRole;

public class UserDAO implements Serializable {
    private  UserRoleDAO roleDao;
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

    public List<User> getUsers() throws SQLException, ClassNotFoundException {

        List<User> listUsers = new ArrayList<>();
        try {
            System.out.println("test");
            con = DBUtils.DBUtils.makeConnection();

            if (con != null) {
                String sql = "Select UserId, UserName, Avatar, Email, FullName, Sex, DayOfBirth, "
                        + "DepartmentId, Phone, Position, Address, Certificate, Status from [User] u"
                        + " where u.Status=1";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("UserId");
                    String userName = rs.getString("UserName");
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
                    User user = new User(id, userName, avatar, email, fullName, sex, dayOfBirth, phone, position, address, certificate, status, departmentId);
                    listUsers.add(user);
                }
            }
        } finally {
            closeConnection();
        }
        return listUsers;
    }

    public User getLoginUsers(String name, String pass) throws SQLException, ClassNotFoundException {

        User user = new User();
        try {
            System.out.println("test");
            con = DBUtils.DBUtils.makeConnection();

            if (con != null) {
                String sql = "Select UserId, UserName, Avatar, Email, FullName, Sex, DayOfBirth,DepartmentId, \n"
                        + "Phone, Position, Address, Certificate, Status from [User] u\n"
                        + "where u.UserName='"+name+"' and u.Password='"+pass+"' and u.Status=1";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                if (rs.next()) {
                    Integer id = rs.getInt("UserId");
                    String userName = rs.getString("UserName");
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
                    List<UserRole> roles=roleDao.getRolesByUserId(id);
                    user = new User(id, userName, avatar, email, fullName, sex, dayOfBirth, phone, position, address, certificate, status, departmentId);
                    
                }
            }
        } finally {
            closeConnection();
        }
        return user;
    }
}
