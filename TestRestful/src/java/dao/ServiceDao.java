/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;


import DBUtils.DBUtils;
import Models.Service;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Tung
 */
public class ServiceDao {
    private PreparedStatement stm;
    private Connection con;
    private ResultSet rs;
    private void closeConnection(){
        try{
            if(rs!=null){
                rs.close();
            }if(stm!=null){
                stm.close();
            }if(con!=null){
                con.close();
            }
        }catch(Exception e){
            e.printStackTrace();
        }
    }
    public List<Service> getAllListService(int departmentId) throws SQLException, ClassNotFoundException {
        List<Service> listService = new ArrayList<>();
        try {
     con = DBUtils.makeConnection();
            if (con != null){
                String sql = "Select ServiceId, ServiceName, Description, Status from Service where DepartmentId=?";
                stm = con.prepareStatement(sql);
                stm.setInt(1, departmentId);
                rs = stm.executeQuery();
                while (rs.next()){
                    Integer id = rs.getInt("ServiceId");
                    String name = rs.getString("ServiceName");
                    String description = rs.getString("Description");
                    Integer Status = rs.getInt("Status");
                    Service ser = new Service(id, departmentId, Status, name, description);
                    listService.add(ser);
                }
            }
        }catch(SQLException e){
            System.out.println("error");
        }finally {
            closeConnection();
        }
        return listService;
    }
    public List<Service> getListService(int departmentId) throws SQLException, ClassNotFoundException {
        List<Service> listService = new ArrayList<>();
        try {
     con = DBUtils.makeConnection();
            if (con != null){
                String sql = "Select ServiceId, ServiceName, Description from Service where DepartmentId=? AND Status=1";
                stm = con.prepareStatement(sql);
                stm.setInt(1, departmentId);
                rs = stm.executeQuery();
                while (rs.next()){
                    Integer id = rs.getInt("ServiceId");
                    String name = rs.getString("ServiceName");
                    String description = rs.getString("Description");
                    Service ser = new Service(id, departmentId, name, description);
                    listService.add(ser);
                }
            }
        }catch(SQLException e){
            System.out.println("error");
        }finally {
            closeConnection();
        }
        return listService;
    }
    public List<Service> getListServiceById(int ServiceId) throws SQLException, ClassNotFoundException {
        List<Service> listService = new ArrayList<>();
        try {
  con = DBUtils.makeConnection();
            if (con != null){
                String sql = "Select DepartmentId, ServiceName, Description from Service where ServiceId=?";
                stm = con.prepareStatement(sql);
                stm.setInt(1, ServiceId);
                rs = stm.executeQuery();
                while (rs.next()){
                    Integer departmentId = rs.getInt("DepartmentId");
                    String name = rs.getString("ServiceName");
                    String description = rs.getString("Description");
                    Service ser = new Service(ServiceId, departmentId, name, description);
                    listService.add(ser);
                }
            }
        }catch(Exception e){
            e.printStackTrace();
        }finally {
            closeConnection();
        }
        return listService;
    }
    public List<Service> getListServiceByName(String ServiceName) throws SQLException, ClassNotFoundException {
        List<Service> listService = new ArrayList<>();
        try {
  con = DBUtils.makeConnection();
            if (con != null){
                String sql = "Select DepartmentId, ServiceId, Description, Status, ServiceName from Service where ServiceName like '%"+ ServiceName +"%'";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()){
                    Integer departmentId = rs.getInt("DepartmentId");
                    int ServiceId = rs.getInt("ServiceId");
                    String description = rs.getString("Description");
                    String name = rs.getString("ServiceName");
                    Integer Status = rs.getInt("Status");
                    Service ser = new Service(ServiceId, departmentId, Status, name, description);
                    listService.add(ser);
                }
            }
        }catch(Exception e){
            e.printStackTrace();
        }finally {
            closeConnection();
        }
        return listService;
    }
    public String createService(String ServiceName,String Description,int DepartmentId) throws SQLException {
        
        String result = "Success";
        if (isNameExited(ServiceName)){
                result="Name exited";
            }
            else{  
        try {
  con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "insert into Service(ServiceName,Description,DepartmentId,Status)values(?,?,?,1)";
                stm = con.prepareStatement(sql);
                stm.setString(1, ServiceName);
                stm.setString(2, Description);
                stm.setInt(3, DepartmentId);
                stm.executeUpdate();
            }
        } catch(Exception e){
            e.printStackTrace();
            result= "Failed";
        } finally {
            closeConnection();
        }}
        return result;
    }
    public String updateService(int id,String ServiceName,String Description,int DepartmentId) {
        String result = "Success";
        if (isNameExited(ServiceName)){
                result="Name existed";
            }
            else{  
        try {
      con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "update Service set ServiceName='"+ServiceName+"'"
                        + ",Description='"+Description+"' ,DepartmentId='"+DepartmentId
                        + "' where ServiceId="+id;           
                stm = con.prepareStatement(sql);
                stm.executeUpdate();

            }
        } catch (Exception e) {
            e.printStackTrace();
            result = "Failed";
        } finally {
            closeConnection();
        }}
        return result;
    }
    public String disableService(int id) {
        String result = "Success";
        try {
       con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "update Service set Status=0 where ServiceId="+id;           
                stm = con.prepareStatement(sql);
                stm.executeUpdate();

            }
        } catch (Exception e) {
            e.printStackTrace();
            result = "Failed";
        } finally {
            closeConnection();
        }
        return result;
    }
    public List<Service> getListServiceByStatus(int status) throws SQLException, ClassNotFoundException {
        List<Service> listService = new ArrayList<>();
        try {
          con = DBUtils.makeConnection();
            if (con != null){
                String sql = "select * from Service where Status=?";
                stm = con.prepareStatement(sql);
                stm.setInt(1, status);
                rs = stm.executeQuery();
                while (rs.next()){
                    Integer ServiceId = rs.getInt("ServiceId");
                    Integer departmentId = rs.getInt("DepartmentId");
                    String name = rs.getString("ServiceName");
                    String description = rs.getString("Description");
                    Service ser = new Service(ServiceId, departmentId, name, description);
                    listService.add(ser);
                }
            }
        } finally {
            closeConnection();
        }
        return listService;
    }
    public String activeService(int id) {
        String result = "Success";
        try {
   con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "update Service set Status=1 where ServiceId="+id;           
                stm = con.prepareStatement(sql);
                stm.executeUpdate();

            }
        } catch (Exception e) {
            e.printStackTrace();
            result = "Failed";
        } finally {
            closeConnection();
        }
        return result;
    }
    public boolean isNameExited(String ServiceName){
        boolean result=false;
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                 String sql="select ServiceId from Service where  ServiceName='"+ServiceName.trim()+"'";
                stm = con.prepareStatement(sql);
                System.out.println(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    result = true;
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            ex.printStackTrace();
         
        } finally {
            closeConnection();
        }
        return result;
    }
}
