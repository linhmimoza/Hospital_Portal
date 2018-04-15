/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import Function.TimeEditor;
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
                String sql = "use Hospital_Portal\n" +
"Select NotificationId, NotificationName, Content, CreateDate, CreateBy,UpdateDate,\n" +
"UpdateBy, n.Status, u.UserName from Notification n, [User] u  where n.CreateBy=u.UserId ORDER BY CreateDate";
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
                    String createName= rs.getString("UserName");
                    Notification notification = new Notification(id, notificationName, content, createDate, updateDate, status , createBy,createName,  updateBy);
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
            
              TimeEditor time= new TimeEditor();
                  String  sql=" insert  Notification(NotificationName,Content,CreateDate,"
                          + "CreateBy,UpdateDate,UpdateBy,Status)\n" +
"values('"+notify.getNotificationName().trim()+"','"+notify.getContent().trim()+"','"+time.getTime()+"'"
                          + ","+notify.getCreateBy()+",'"+time.getTime()+"',"+notify.getCreateBy()+",1)";
                         System.out.println(sql);
                  stm = con.prepareStatement(sql);
              
                stm.executeUpdate();

            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
result="Failed";
        } finally {
            closeConnection();
        }
        return result;
   }
   
    public String updateNotification(Notification notify){
      String result="Success";
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
            
                TimeEditor time= new TimeEditor();
                  String  sql=" update Notification set NotificationName='"+notify.getNotificationName().trim()+"', Content='"+notify.getContent().trim()+"',\n" +
"UpdateDate='"+time.getTime()+"',UpdateBy="+notify.getUpdateBy()+", Status="+notify.getStatus()+" where NotificationId="+notify.getNotificationId();
                         System.out.println(sql);
                  stm = con.prepareStatement(sql);
              
                stm.executeUpdate();

            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
result="Failed";
        } finally {
            closeConnection();
        }
        return result;
   }
public Notification getNotificationById(int id) {

        Notification notify = new Notification();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select NotificationId, NotificationName, Content, CreateDate, CreateBy,UpdateDate,"
                        + "UpdateBy, Status from Notification where NotificationId="+id;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    id = rs.getInt("NotificationId");
                    String notificationName = rs.getString("NotificationName");
                    String content = rs.getString("Content");
                    String createDate = rs.getString("CreateDate");
                    Integer createBy = rs.getInt("CreateBy");
                    Integer updateBy = rs.getInt("UpdateBy");
                    String updateDate = rs.getString("UpdateDate");
                    Integer status = rs.getInt("Status");
                    notify = new Notification(id, notificationName, content, createDate, updateDate, status , createBy,  updateBy);
                  
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(NotificationDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            closeConnection();
        }
        return notify;
    }
 public List<Notification> getActivateNotifications() {

        List<Notification> listNotifications = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select NotificationId, NotificationName, Content, CreateDate, CreateBy,UpdateDate,\n" +
"UpdateBy, n.Status, u.UserName from Notification n, [User] u \n" +
" where n.CreateBy=u.UserId and n.Status=1 ORDER BY UpdateDate DESC";
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
                    String createName= rs.getString("UserName");
                    Notification notification = new Notification(id, notificationName, content, createDate, updateDate, status , createBy,createName,  updateBy);
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

}
