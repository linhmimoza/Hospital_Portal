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
import Models.Department;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Admin
 */
public class DepartmentDAO implements Serializable {
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

    
    public List<Department> getDepartments()  {
     
        List<Department> listDepartments = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select DepartmentId, DepartmentName, Description, Status, Code from Department";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("DepartmentId");
                    String departmentName = rs.getString("DepartmentName");
                    String description = rs.getString("Description");
                    String code = rs.getString("Code");
                    Integer status = rs.getInt("Status");
                    UserDAO dao=new UserDAO();
                    int quantity=dao.getDepartmentQuantity(id);
                    Department department = new Department(id, departmentName, description, code, status, quantity);           
                    listDepartments.add(department);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
       closeConnection();
        }
        return listDepartments;
    }
    
    public Department getDepartmentById(int departmentId)  {
     
       Department department = null;
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select DepartmentId, DepartmentName, Description,"
                        + " Status, Code from Department where DepartmentId="+departmentId;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                if (rs.next()) {
                    Integer id = rs.getInt("DepartmentId");
                    String departmentName = rs.getString("DepartmentName");
                    String description = rs.getString("Description");
                    Integer status = rs.getInt("Status");
                     String code = rs.getString("Code");
                    UserDAO dao=new UserDAO();
                    int quantity=dao.getDepartmentQuantity(id);
                  department = new Department(id, departmentName, description, code, status, quantity);           

                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
       closeConnection();
        }
        return department;
    }
    public String updateDepartment(Department department) {
        String result = "Success";
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "update Department set DepartmentName='"+department.getDepartmentName().trim()+"'"
                        + ",Description='"+department.getDescription().trim()+"' ,Code='"+department.getCode().trim()+"' ,Status="+department.getStatus()+
                        " where DepartmentId="+department.getDepartmentId();           
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
    
    public String deleteDepartment(int departmentId) {
        String result = "Success";
            UserDAO dao=new UserDAO();
                    int quantity=dao.getDepartmentQuantity(departmentId);
                    if (quantity>0){
                        result="There are some actvate user in this department";
                    }
                    else{
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "update Department set Status=2 where DepartmentId="+departmentId;           
                stm = con.prepareStatement(sql);
                stm.executeUpdate();

            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
            result = "Failed";
        } finally {
            closeConnection();
        }}
        return result;
    }
      public String createDepartment(Department department) {
        String result = "Success";
        if (isNameExited(department.getDepartmentName())){
            if (isCodeExited(department.getCode())){
                result="Name and code  exited";
            }
            else result="Name exited";
        }else{
            if (isCodeExited(department.getCode())){
                result="Code exited";
            }
            else{     
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                
                 
             String   sql = "insert into Department(DepartmentName,Description,Status,Code)"
                        + " values('"+department.getDepartmentName().trim()+"','"+department.getDescription().trim()+"',"
                        + "1,'"+department.getCode().trim()+"')";           
                stm = con.prepareStatement(sql);
                stm.executeUpdate();

            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
            result = "Failed";
        } finally {
            closeConnection();
        }}}
        return result;
    }
      public boolean isNameExited(String name){
        boolean result=false;
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                 String sql="select DepartmentId from Department where  DepartmentName='"+name.trim()+"'";
                stm = con.prepareStatement(sql);
                System.out.println(sql);
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
      public boolean isCodeExited(String code){
        boolean result=false;
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                 String sql="select DepartmentId from Department where Code='"+code.trim()+"'";
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
}
