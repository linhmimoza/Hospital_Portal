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
import java.util.ArrayList;
import java.util.List;
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

    public List<Introduce> getIntroduce() throws SQLException, ClassNotFoundException {
        List<Introduce> listIntroduce = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select i.*, u.FullName as uploadByUser, u1.FullName as updateByUser\n"
                        + "from Introduce i\n"
                        + "left outer join [User] u on u.UserId = i.UploadBy\n"
                        + "left outer join [User] u1 on u1.UserId = i.UpdateBy\n"
                        + "where i.Status=1";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("Id");
                    String Title = rs.getString("Title");
                    String IntroduceContent = rs.getString("IntroduceContent");
                    Integer status = rs.getInt("Status");
                    String uploadByUser = rs.getString("uploadByUser");
                    String uploadDay = rs.getString("UploadDay");
                    String updateByUser = rs.getString("updateByUser");
                    String updateDay = rs.getString("UpdateDay");
                    Introduce in = new Introduce(id, status, Title, IntroduceContent, uploadDay, updateDay, uploadByUser, updateByUser);
                    listIntroduce.add(in);
                }
            }
        } finally {
            closeConnection();
        }
        return listIntroduce;
    }

    public String createIntroduce(String title, String content, int uploadBy, String uploadDay) throws SQLException {

        String result = "Success";
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "insert into Introduce(Title,IntroduceContent,Status,UploadBy,UploadDay,UpdateBy,UpdateDay)values(?,?,2,?,?,?,?)";
                stm = con.prepareStatement(sql);
                stm.setString(1, title);
                stm.setString(2, content);
                stm.setInt(3, uploadBy);
                stm.setString(4, uploadDay);
                stm.setInt(5, uploadBy);
                stm.setString(6, uploadDay);
                rs = stm.executeQuery();
            }
        } catch (Exception e) {
            e.printStackTrace();
            result = "Failed";
        } finally {
            closeConnection();
        }
        return result;
    }
    public String updateIntroduce(int id, String title,String content,int updateBy,String updateDay) {
        String result = "Success";
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "update Introduce set Title='" + title + "'"
                        + ",IntroduceContent='" + content
                        + "',UpdateBy=" + updateBy + " ,UpdateDay='" + updateDay
                        + "' where Id=" + id;
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
        String result = "Success";
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "update Introduce set Status=0 where Id=" + id;
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

    public List<Introduce> getListIntroduceById(int id) throws SQLException, ClassNotFoundException {
        List<Introduce> listIntroduce = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select i.*, u.FullName as uploadByUser, u1.FullName as updateByUser\n"
                        + "from Introduce i\n"
                        + "left outer join [User] u on u.UserId = i.UploadBy\n"
                        + "left outer join [User] u1 on u1.UserId = i.UpdateBy\n"
                        + "where i.Status=1 AND i.Id=?";
                stm = con.prepareStatement(sql);
                stm.setInt(1, id);
                rs = stm.executeQuery();
                while (rs.next()) {
                    String Title = rs.getString("Title");
                    String IntroduceContent = rs.getString("IntroduceContent");
                    Integer status = rs.getInt("Status");
                    String uploadByUser = rs.getString("uploadByUser");
                    String uploadDay = rs.getString("UploadDay");
                    String updateByUser = rs.getString("updateByUser");
                    String updateDay = rs.getString("UpdateDay");
                    Introduce in = new Introduce(id, status, Title, IntroduceContent, uploadDay, updateDay, uploadByUser, updateByUser);
                    listIntroduce.add(in);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        return listIntroduce;
    }

    public String activeIntroduce(int id) {
        String result = "Success";
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "update Introduce set Status=1 where ServiceId=" + id;
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
