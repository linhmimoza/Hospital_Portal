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
import Models.User;
import java.util.logging.Level;
import java.util.logging.Logger;

public class UserDAO implements Serializable {

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

    public List<User> getUsers() {

        List<User> listUsers = new ArrayList<>();
        try {
            System.out.println("test");
            con = DBUtils.DBUtils.makeConnection();

            if (con != null) {
                String sql = "Select UserId, UserName, Avatar, Email, FullName, Sex, DayOfBirth,RoleId, "
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
                    Integer roleId = rs.getInt("RoleId");
                    User user = new User(id, roleId, userName, avatar, email, fullName, sex, dayOfBirth, phone, position, address, certificate, status, departmentId);
                    listUsers.add(user);
                }
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            closeConnection();
        }
        return listUsers;
    }

    public int getDepartmentQuantity(int id) {
        int result = 0;
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "select COUNT(u.UserId) from [User] u where u.DepartmentId=" + id;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    result = rs.getInt(1);
                }
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            closeConnection();
        }
        return result;
    }

    public User getLoginUsers(String name, String pass) {

        User user = new User();
        try {
            System.out.println("test");
            con = DBUtils.DBUtils.makeConnection();

            if (con != null) {
                String sql = "Select UserId, UserName, Avatar, Email, FullName, Sex, DayOfBirth,RoleId,DepartmentId, \n"
                        + "Phone, Position, Address, Certificate, Status from [User] u\n"
                        + "where u.UserName='" + name + "' and u.Password='" + pass + "' and u.Status=1";
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
                    Integer roleId = rs.getInt("RoleId");

                    user = new User(id, roleId, userName, avatar, email, fullName, sex, dayOfBirth, phone, position, address, certificate, status, departmentId);

                }
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            closeConnection();
        }
        return user;
    }

    public boolean createUser(User user) {
        boolean result = true;
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "insert	into [User](Address,Avatar,Certificate,DayOfBirth,DepartmentId,"
                        + "Email,FullName,Password,Phone,Position,RoleId,Sex,Status,UserName)\n"
                        + "values('" + user.getAddress() + "','" + user.getAvatar() + "','" + user.getCertificate() + "',"
                        + "'" + user.getDayOfBirth() + "'," + user.getDepartmentId() + ","
                        + "'" + user.getEmail() + "','" + user.getFullName() + "','" + user.getPassword() + "',"
                        + "'" + user.getPhone() + "','" + user.getPosition() + "'," + user.getRole() + "," + user.getSex() + ","
                        + "" + user.getStatus() + ",'" + user.getUserName() + "')";
                stm = con.prepareStatement(sql);
                stm.executeUpdate();

            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
            result = false;
        } finally {
            closeConnection();
        }
        return result;
    }

    public boolean updateUser(User user) {
        boolean result = true;
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "UPDATE [User]\n"
                        + "SET Address = '"+user.getAddress()+"', Avatar='"+user.getAvatar()+"', Certificate='"+user.getCertificate()+"', \n"
                        + "DayOfBirth='"+user.getDayOfBirth()+"',DepartmentId="+user.getDepartmentId()+",Email='"+user.getEmail()+"',FullName='"+user.getFullName()+"',\n"
                        + "Password='"+user.getPassword()+"',Phone='"+user.getPhone()+"',Position='"+user.getPosition()+"',RoleId="+user.getRole()+",Sex="+user.getSex()+",Status="+user.getStatus()+"\n"
                        + "WHERE UserId="+user.getUserId();
                stm = con.prepareStatement(sql);
                stm.executeUpdate();

            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
            result = false;
        } finally {
            closeConnection();
        }
        return result;
    }
}
