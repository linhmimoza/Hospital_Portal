/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;


import DBUtils.DBUtils;
import Models.Introduce;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Tung
 */
public class IntroduceDao {
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
    public String createIntroduce(String title,String content,int status,int uploadBy,String uploadDay,int updateBy,String updateDay) throws SQLException {
        
        String result = "Susscess";
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "insert into Introduce(Title,IntroduceContent,Status,UploadBy,UploadDay,UpdateBy,UpdateDay)values(?,?,2,?,?,?,?)";
                stm = con.prepareStatement(sql);
                stm.setString(1, title);
                stm.setString(2, content);
                stm.setInt(3, uploadBy);
                stm.setString(4, uploadDay);
                stm.setInt(5, updateBy);
                stm.setString(6, updateDay);
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
    public String updateIntroduce(int id,String title,String content,int status,int updateBy,String updateDay) {
        String result = "Susscess";
        try {
             con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "update Introduce set Title='"+title+"'"
                        + ",IntroduceContent='"+content+"' ,Status="+status
                        + ",UpdateBy="+updateBy+" ,UpdateDay='"+updateDay
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
    public String disableIntroduce(int id) {
        String result = "Susscess";
        try {
          con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "update Introduce set Status=0 where Id="+id;           
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
