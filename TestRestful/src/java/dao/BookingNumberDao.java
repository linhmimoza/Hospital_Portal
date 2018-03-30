/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import DBUtils.DBUtils;
import Models.BookingNumber;
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
public class BookingNumberDao {
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
    public String createBookingNumber(int BookingId) throws SQLException {
        
        String result = "Success";
        try {
         con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "insert into BookingNumber(BookingId)values(?)";
                stm = con.prepareStatement(sql);
                stm.setInt(1, BookingId);
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
    public String resetBookingNumber(){
        String result = "Success";
        try{
            String sql="Delete * from BookingNumber";
      con = DBUtils.makeConnection();
            stm=con.prepareStatement(sql);
            stm.executeUpdate();
        }catch(Exception e){
            e.printStackTrace();
            result= "Failed";
        }finally{
            closeConnection();
        }
    return result;
    }
}
