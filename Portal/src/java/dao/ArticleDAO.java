/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.sql.Date;
import java.util.List;
import Models.Article;

public class ArticleDAO implements Serializable {

    public List<Article> getListArticles() throws SQLException, ClassNotFoundException {
        Connection con = null;
        PreparedStatement stm = null;
        ResultSet rs = null;
        
        List<Article> listArticle = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null){
                String sql = "Select ArticleId, Title, CategoryId, UploadBy, UploadDate, UpdateBy, UpdateDate, Status, Link from Article";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()){
                    Integer id = rs.getInt("ArticleId");
                    String title = rs.getString("Title");
                    Integer cateId = rs.getInt("CategoryId");
                    Integer uploadBy = rs.getInt("UploadBy");
                    Date uploadDate = rs.getDate("UploadDate");
                    Integer updateBy = rs.getInt("UpdateBy");
                    Date updateDate = rs.getDate("UpdateDate");
                    Integer status = rs.getInt("Status");
                    String link = rs.getString("Link");
                    Article ar = new Article(id, title, uploadDate, uploadDate, status, link, cateId, uploadBy, updateBy);
                    listArticle.add(ar);
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
        return listArticle;
    }
}
