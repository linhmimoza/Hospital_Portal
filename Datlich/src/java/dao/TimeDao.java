/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import db.MyConnection;
import dto.Time;
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
public class TimeDao {

    private PreparedStatement stm;
    private Connection con;
    private ResultSet rs;

    private void closeConnection() {
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
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<Time> getListTime(String date, int available) throws SQLException, ClassNotFoundException {
        List<Time> listTime = new ArrayList<>();
        try {
            con = MyConnection.getMyConnection();
            if (con != null) {
                String sql = "Select TimeId, Date, Time, Amount, Available from Time where Date=? and Available=?";
                stm = con.prepareStatement(sql);
                stm.setString(1, date);
                stm.setInt(2, available);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("TimeId");
                    String time = rs.getString("Time");
                    int amount = Integer.parseInt(rs.getString("Amount"));
                    Time t = new Time(id, amount, available, date, time);
                    listTime.add(t);
                }
            }
        } finally {
            closeConnection();
        }
        return listTime;
    }

    public boolean bookingSuccess(int timeId) {
        boolean check = false;
        try {
            String sql = "Update Time set Amount=Amount-1 where TimeId=?";
            con = MyConnection.getMyConnection();
            stm = con.prepareStatement(sql);
            stm.setInt(1, timeId);
            check = stm.executeUpdate() > 0;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        return check;
    }

    public boolean checkAvailable() {
        boolean check = false;
        try {
            String sql = "Update Time set Available=0 where Amount=0";
            con = MyConnection.getMyConnection();
            stm = con.prepareStatement(sql);
            check = stm.executeUpdate() > 0;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        return check;
    }
    public String updateAmountTime(int Amount,String date) {
        String result = "Susscess";
        try {
            con = MyConnection.getMyConnection();
            if (con != null) {
                String sql = "update Time set Amount="+Amount+""
                        + "where Date >= '"+date+"'";
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
