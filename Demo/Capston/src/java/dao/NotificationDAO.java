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
import models.Category;
import models.Notification;

public class NotificationDAO implements Serializable {

    public List<Notification> getNotifications() throws SQLException, ClassNotFoundException {
        Connection con = null;
        PreparedStatement stm = null;
        ResultSet rs = null;

        List<Notification> listNotifications = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select NotificationId, NotificationName, Content, CreateDate, CreateBy, "
                        + "UpdateDate, UpdateBy, Status from Notification";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("NotificationId");
                    String notificationName = rs.getString("NotificationName");
                    String content = rs.getString("Content");
                    Date createDate = rs.getDate("CreateDate");
                    Integer createBy = rs.getInt("CreateBy");
                    Integer updateBy = rs.getInt("UpdateBy");
                    Date updateDate = rs.getDate("UpdateDate");
                    Integer status = rs.getInt("Status");                  
                    Notification notification = new Notification(id, notificationName, content, createDate, updateDate, createBy, updateBy, status);
                    listNotifications.add(notification);
                }
            }
        } finally {
            if (rs != null) {
                rs.close();
            }
            if (stm != null) {
                stm.close();
            }
            if (con != null) {
                con.close();
            }
        }
        return listNotifications;
    }

    
}
