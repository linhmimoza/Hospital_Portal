/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import Models.Select;
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
          
            con = DBUtils.DBUtils.makeConnection();

            if (con != null) {
                String sql = "Select UserId, UserName, Avatar, Email, FullName, Sex, DayOfBirth,u.RoleId, r.RoleName"
                        + ",u.DepartmentId,d.DepartmentName, Phone, Position, Address, Certificate, u.Status from [User] u, Role r,Department d\n"
                        + "where  r.RoleId=u.RoleId and u.DepartmentId=d.DepartmentId  and u.RoleId>1";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("UserId");
                    String userName = rs.getString("UserName");
                    String avatar = rs.getString("Avatar");
                    String email = rs.getString("Email");
                    String fullName = rs.getString("FullName");
                    String sex = rs.getString("Sex");
                    String dayOfBirth = rs.getString("DayOfBirth");
                    Integer departmentId = rs.getInt("DepartmentId");
                    String phone = rs.getString("Phone");
                    String position = rs.getString("Position");
                    String address = rs.getString("Address");
                    String certificate = rs.getString("Certificate");
                    String roleName = rs.getString("RoleName");
                    String departmentName = rs.getString("DepartmentName");
                    Integer status = rs.getInt("Status");
                    Integer roleId = rs.getInt("RoleId");
                    User user = new User(id, userName, avatar, email, fullName, sex, dayOfBirth, phone, position, address, certificate, status, 
                            roleId, roleName, departmentId,departmentName);
                            listUsers.add(user);
                     
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
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
                String sql = "select COUNT(u.UserId) from [User] u where u.DepartmentId=" + id+"and u.Status=1";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                if (rs.next()) {
                    result = rs.getInt(1);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            closeConnection();
        }
        return result;
    }
     public String getUserPhone(int id) {
        String result = "";
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "select Phone from [User] u where UserId=" + id;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                if (rs.next()) {
                    result = rs.getString("Phone");
                    result=result.substring(1);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            closeConnection();
        }
        return result;
    }
    public User getUserById(int Id) {

        User user = null;
        try {
     
            con = DBUtils.DBUtils.makeConnection();

            if (con != null) {
                String sql = "Select UserId, UserName, Avatar, Email, FullName, Sex, DayOfBirth,u.RoleId, r.RoleName"
                        + ",u.DepartmentId,d.DepartmentName, Phone, Position, Address, Certificate, u.Status from [User] u, Role r,Department d\n"
                        + "where u.UserId='" + Id +  "'  and r.RoleId=u.RoleId and u.DepartmentId=d.DepartmentId";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                if (rs.next()) {
                    Integer id = rs.getInt("UserId");
                    String userName = rs.getString("UserName");
                    String avatar = rs.getString("Avatar");
                    String email = rs.getString("Email");
                    String fullName = rs.getString("FullName");
                    String sex = rs.getString("Sex");
                    String dayOfBirth = rs.getString("DayOfBirth");
                    Integer departmentId = rs.getInt("DepartmentId");
                    String phone = rs.getString("Phone");
                    String position = rs.getString("Position");
                    String address = rs.getString("Address");
                    String certificate = rs.getString("Certificate");
                    Integer status = rs.getInt("Status");
                    Integer roleId = rs.getInt("RoleId");
                     String departmentName = rs.getString("DepartmentName");
 String roleName = rs.getString("RoleName");
                     user = new User(id, userName, avatar, email, fullName, sex, dayOfBirth, phone, position, address, certificate, status, roleId, roleName, departmentId,departmentName);
                   
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            closeConnection();
        }
        return user;
    }

    public User getLoginUsers(String name, String pass) {

        User user = null;
        try {
      
            con = DBUtils.DBUtils.makeConnection();

            if (con != null) {
                String sql = "Select UserId, UserName, Avatar, Email, FullName, Sex, DayOfBirth,u.RoleId, r.RoleName"
                        + ",u.DepartmentId,d.DepartmentName, Phone, Position, Address, Certificate, u.Status from [User] u, Role r,Department d\n"
                        + "where u.UserName='" + name + "' and u.Password='" + pass + "' and u.Status=1 and r.RoleId=u.RoleId and u.DepartmentId=d.DepartmentId";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                if (rs.next()) {
                    Integer id = rs.getInt("UserId");
                    String userName = rs.getString("UserName");
                    String avatar = rs.getString("Avatar");
                    String email = rs.getString("Email");
                    String fullName = rs.getString("FullName");
                    String sex = rs.getString("Sex");
                    String dayOfBirth = rs.getString("DayOfBirth");
                    Integer departmentId = rs.getInt("DepartmentId");
                    String phone = rs.getString("Phone");
                    String position = rs.getString("Position");
                    String address = rs.getString("Address");
                    String certificate = rs.getString("Certificate");
                    Integer status = rs.getInt("Status");
                    Integer roleId = rs.getInt("RoleId");
                     String departmentName = rs.getString("DepartmentName");
 String roleName = rs.getString("RoleName");
                     user = new User(id, userName, avatar, email, fullName, sex, dayOfBirth, phone, position, address, certificate, status, roleId, roleName, departmentId,departmentName);
                   
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            closeConnection();
        }
        return user;
    }
    public boolean isUsernameExited(String userName, int id){
        boolean result=false;
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "select UserId from [User] where UserName='"+userName.trim()+"' and UserId<>"+id;
                System.out.println(sql);
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                if (rs.next()) {
                    result = true;
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
         
        } finally {
            closeConnection();
        }
        return result;
    }
public boolean isEmailExited(String email, int id){
        boolean result=false;
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "select UserId from [User] where Email='"+email.trim()+"'and UserId<>"+id;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                if (rs.next()) {
                    result = true;
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
         
        } finally {
            closeConnection();
        }
        return result;
    }
    public String updateUser(User user) {
        String result = "Success";
         if (isEmailExited(user.getEmail(),user.getUserId())){
        result="Email is exited";
         }else{     
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "UPDATE [User]\n"
                        + "SET Address = '" + user.getAddress().trim() + "', "
                        + "Avatar='" + user.getAvatar() + "', Certificate='" + user.getCertificate() + "', \n"
                        + "DayOfBirth='" + user.getDayOfBirth() + "',DepartmentId=" + user.getDepartmentId() +  ","
                        + "FullName='" + user.getFullName().trim() + "',\n"
                        +  "Phone='" + user.getPhone().trim() + "',Position='" + user.getPosition() + "',RoleId=" + user.getRoleId() + ",Sex='" + user.getSex() + "',Status=" + user.getStatus() + "\n"
                        + "WHERE UserId=" + user.getUserId();
                stm = con.prepareStatement(sql);
                stm.executeUpdate();

            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
            result = "Failed";
        } finally {
            closeConnection();
        }}
        return result;
    }
    
    public String createUser(User user) {
        String result = "Success";
        if (isEmailExited(user.getEmail(),user.getUserId())){
            if (isUsernameExited(user.getUserName(),user.getUserId())){
                result="Username and email exited";
            }
            else result="Email exited";
        }else{
            if (isUsernameExited(user.getUserName(),user.getUserId())){
                result="Username exited";
            }
            else{     
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "insert	into [User](Address,Avatar,Certificate,DayOfBirth,DepartmentId,"
                        + "Email,FullName,Password,Phone,Position,RoleId,Sex,Status,UserName)\n"
                        + "values('" + user.getAddress().trim() + "','" + user.getAvatar() + "',"
                        + "'" + user.getCertificate() + "',"
                        + "'" + user.getDayOfBirth() + "'," + user.getDepartmentId() + ","
                        + "'" + user.getEmail().trim() + "','" + user.getFullName().trim() + "','123',"
                        + "'" + user.getPhone() + "','" + user.getPosition() + "'," + user.getRoleId() + ",'" + user.getSex() + "',"
                        + "1,'" + user.getUserName().trim() + "')";
                stm = con.prepareStatement(sql);
                stm.executeUpdate();

            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
            result = "Failed";
        } finally {
            closeConnection();
        }
               }
        }
        return result;
    }

    public String deleteUser(int userId) {
        String result = "Success";
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "UPDATE [User]\n"
                        + "SET Status=" + 2 + "\n"
                        + "WHERE UserId=" + userId;             
                stm = con.prepareStatement(sql);
                stm.executeUpdate();

            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
            result = "Failed";
        } finally {
            closeConnection();
        }
        return result;
    }
     public String activeUser(int userId) {
        String result = "Success";
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "UPDATE [User]\n"
                        + "SET Status=" + 1 + "\n"
                        + "WHERE UserId=" + userId;             
                stm = con.prepareStatement(sql);
                stm.executeUpdate();

            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
            result = "Failed";
        } finally {
            closeConnection();
        }
        return result;
    }
     
       public List<Select> getUserForSelect() {

        List<Select> listUsers = new ArrayList<>();
        try {
          
            con = DBUtils.DBUtils.makeConnection();

            if (con != null) {
                String sql = "select UserId,Code,UserName from [User] u,"
                        + " Department d where u.DepartmentId=d.DepartmentId\n" +
"and u.Status=1 and u.RoleId>1";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("UserId");
                    String userName = rs.getString("UserName");
                    String code = rs.getString("Code");
                   Select user= new Select(id, code+"."+userName);
                            listUsers.add(user);
                     
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            closeConnection();
        }
        return listUsers;
    }

       
        public List<User> getUserByDepartment(int depId) {

        List<User> listUsers = new ArrayList<>();
        try {
          
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select UserId, UserName, Avatar, Email, FullName, Sex, DayOfBirth,u.RoleId, r.RoleName\n" +
",u.DepartmentId,d.DepartmentName, Phone, Position, Address, Certificate, u.Status from [User] u,\n" +
" Role r,Department d where  r.RoleId=u.RoleId and u.DepartmentId=d.DepartmentId \n" +
" and u.RoleId>1 and u.Status=1 and u.DepartmentId="+depId;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("UserId");
                    String userName = rs.getString("UserName");
                    String avatar = rs.getString("Avatar");
                    String email = rs.getString("Email");
                    String fullName = rs.getString("FullName");
                    String sex = rs.getString("Sex");
                    String dayOfBirth = rs.getString("DayOfBirth");
                    Integer departmentId = rs.getInt("DepartmentId");
                    String phone = rs.getString("Phone");
                    String position = rs.getString("Position");
                    String address = rs.getString("Address");
                    String certificate = rs.getString("Certificate");
                    String roleName = rs.getString("RoleName");
                    String departmentName = rs.getString("DepartmentName");
                    Integer status = rs.getInt("Status");
                    Integer roleId = rs.getInt("RoleId");
                    User user = new User(id, userName, avatar, email, fullName, sex, dayOfBirth, phone, position, address, certificate, status, 
                            roleId, roleName, departmentId,departmentName);
                            listUsers.add(user);
                     
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            closeConnection();
        }
        return listUsers;
    }

}
