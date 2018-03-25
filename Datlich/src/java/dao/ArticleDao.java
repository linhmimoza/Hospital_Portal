/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import db.MyConnection;
import dto.Article;
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
public class ArticleDao {

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

    public List<Article> getListArticle(int categoryId) throws SQLException, ClassNotFoundException {
        List<Article> listArticle = new ArrayList<>();
        try {
            con = MyConnection.getMyConnection();
            if (con != null) {
                String sql = "Select a.*, u.FullName as uploadByUser, u1.FullName as updateByUser\n"
                        + "from Article a\n"
                        + "left outer join [User] u on u.UserId = a.UploadBy\n"
                        + "left outer join [User] u1 on u1.UserId = a.UpdateBy \n"
                        + "where CategoryId=?";
                stm = con.prepareStatement(sql);
                stm.setInt(1, categoryId);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("ArticleId");
                    String title = rs.getString("Title");
                    Integer uploadBy = rs.getInt("UploadBy");
                    String uploadDate = rs.getString("UploadDate");
                    Integer updateBy = rs.getInt("UpdateBy");
                    String updateDate = rs.getString("UpdateDate");
                    Integer status = rs.getInt("Status");
                    String link = rs.getString("Link");
                    String describe = rs.getString("Describe");
                    String uploadByName = rs.getString("uploadByUser");
                    String updateByName = rs.getString("updateByUser");
                    Article a = new Article(id, categoryId, uploadBy, updateBy, status, title, uploadDate, updateDate, link, describe, uploadByName, updateByName);
                    listArticle.add(a);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        return listArticle;
    }
}
