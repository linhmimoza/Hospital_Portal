/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import db.MyConnection;
import dto.Service;
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
    public List<Service> getListService(int departmentId) throws SQLException, ClassNotFoundException {
        List<Service> listService = new ArrayList<>();
        try {
            con = MyConnection.getMyConnection();
            if (con != null){
                String sql = "Select ServiceId, ServiceName, Description from Service where DepartmentId=?";
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
        } finally {
            closeConnection();
        }
        return listService;
    }
    public String createService(String ServiceName,String Description,int DepartmentId) throws SQLException {
        
        String result = "Susscess";
        try {
            con = MyConnection.getMyConnection();
            if (con != null) {
                String sql = "insert into Service(ServiceName,Description,DepartmentId,Status)values(?,?,?,2)";
                stm = con.prepareStatement(sql);
                stm.setString(1, ServiceName);
                stm.setString(2, Description);
                stm.setInt(3, DepartmentId);
                rs=stm.executeQuery();
            }
        } catch(Exception e){
            e.printStackTrace();
            result= "Failed";
        } finally {
            closeConnection();
        }
        return result;
    }
    public String updateService(int id,String ServiceName,String Description,int DepartmentId,int Status) {
        String result = "Susscess";
        try {
            con = MyConnection.getMyConnection();
            if (con != null) {
                String sql = "update Service set ServiceName='"+ServiceName+"'"
                        + ",Description='"+Description+"' ,DepartmentId='"+DepartmentId+"' ,Status="+Status
                        + "' where Id="+id;           
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
    public String disableService(int id) {
        String result = "Susscess";
        try {
            con = MyConnection.getMyConnection();
            if (con != null) {
                String sql = "update Service set Status=0 where Id="+id;           
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
}
