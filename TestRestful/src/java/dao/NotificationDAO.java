/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import Models.Notification;
import java.util.logging.Level;
import java.util.logging.Logger;

public class NotificationDAO implements Serializable {

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

    public List<Notification> getNotifications() {

        List<Notification> listNotifications = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select NotificationId, NotificationName, Content, CreateDate, CreateBy,UpdateDate,"
                        + "UpdateBy, Status from Notification ";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("NotificationId");
                    String notificationName = rs.getString("NotificationName");
                    String content = rs.getString("Content");
                    String createDate = rs.getString("CreateDate");
                    Integer createBy = rs.getInt("CreateBy");
                    Integer updateBy = rs.getInt("UpdateBy");
                    String updateDate = rs.getString("UpdateDate");
                    Integer status = rs.getInt("Status");
                    Notification notification = new Notification(id, notificationName, content, createDate, updateDate, status , createBy,  updateBy);
                    listNotifications.add(notification);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(NotificationDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            closeConnection();
        }
        return listNotifications;
    }
   public String createNotification(Notification notify){
      String result="Success";
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
            
          
                  String  sql=" insert  Notification(NotificationName,Content,CreateDate,"
                          + "CreateBy,UpdateDate,UpdateBy,Status)\n" +
"values('"+notify.getNotificationName()+"','"+notify.getContent()+"','"+notify.getCreateDate()+"'"
                          + ","+notify.getCreateBy()+",'"+notify.getUpdateDate()+"',"+notify.getUpdateBy()+","+notify.getStatus()+")";
                         System.out.println(sql);
                  stm = con.prepareStatement(sql);
              
                stm.executeUpdate();

            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
result="Fail";
        } finally {
            closeConnection();
        }
        return result;
   }
}
