/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import DBUtils.DBUtils;
import Function.TimeEditor;
import Models.Article;
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
    public List<Article> getAllListArticle(int categoryId) throws SQLException, ClassNotFoundException {
        List<Article> listArticle = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select a.*, u.FullName as uploadByUser, u1.FullName as updateByUser\n"
                        + "from Article a\n"
                        + "left outer join [User] u on u.UserId = a.UploadBy\n"
                        + "left outer join [User] u1 on u1.UserId = a.UpdateBy \n"
                        + "where a.CategoryId=?";
                //select * from Article order by id desc limit 5;
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

    public List<Article> getListArticle(int categoryId) throws SQLException, ClassNotFoundException {
        List<Article> listArticle = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select a.*, u.FullName as uploadByUser, u1.FullName as updateByUser\n"
                        + "from Article a\n"
                        + "left outer join [User] u on u.UserId = a.UploadBy\n"
                        + "left outer join [User] u1 on u1.UserId = a.UpdateBy \n"
                        + "where CategoryId=? AND a.Status=1";
                //select * from Article order by id desc limit 5;
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

    public List<Article> getListArticleById(int id) throws SQLException, ClassNotFoundException {
        List<Article> listArticle = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select a.*, u.FullName as uploadByUser, u1.FullName as updateByUser\n"
                        + "from Article a\n"
                        + "left outer join [User] u on u.UserId = a.UploadBy\n"
                        + "left outer join [User] u1 on u1.UserId = a.UpdateBy \n"
                        + "where ArticleId=?";
                //select * from Article order by id desc limit 5;
                stm = con.prepareStatement(sql);
                stm.setInt(1, id);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer categoryId = rs.getInt("CategoryId");
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
    public List<Article> getListArticleByTitle(String Title) throws SQLException, ClassNotFoundException {
        List<Article> listArticle = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select a.*, u.FullName as uploadByUser, u1.FullName as updateByUser\n"
                        + "from Article a\n"
                        + "left outer join [User] u on u.UserId = a.UploadBy\n"
                        + "left outer join [User] u1 on u1.UserId = a.UpdateBy \n"
                        + "where Title=?";
                stm = con.prepareStatement(sql);
                stm.setString(1, Title);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer categoryId = rs.getInt("CategoryId");
                    Integer id = rs.getInt("ArticleId");
                    Integer uploadBy = rs.getInt("UploadBy");
                    String uploadDate = rs.getString("UploadDate");
                    String title = rs.getString("Title");
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

    public List<Article> getTopListArticle() throws SQLException, ClassNotFoundException {
        List<Article> listArticle = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select top 5 a.*, u.FullName as uploadByUser, u1.FullName as updateByUser\n"
                        + "from Article a\n"
                        + "left outer join [User] u on u.UserId = a.UploadBy\n"
                        + "left outer join [User] u1 on u1.UserId = a.UpdateBy \n"
                        + " where a.Status=1 \n"
                        + " order by a.ArticleId desc";
                //select * from article order by id desc limit 5;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("ArticleId");
                    String title = rs.getString("Title");
                    Integer categoryId = rs.getInt("CategoryId");
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

    public String createArticle(Article article) throws SQLException, ClassNotFoundException {

        String result = "Success";
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "insert into Article(Title,CategoryId,UpdateBy,UpdateDate,UploadBy,UploadDate,Status,Link,Describe)values(?,?,?,?,?,?,?,?,?)";
                stm = con.prepareStatement(sql);
                stm.setString(1, article.getTitle());
                stm.setInt(2, article.getCategoryId());
                stm.setInt(3, article.getUploadBy());
                stm.setString(4, article.getUploadDate());
                stm.setInt(5, article.getUploadBy());
                stm.setString(6, article.getUploadDate());
                stm.setInt(7, 2);
                stm.setString(8, article.getLink());
                stm.setString(9, article.getDescribe());
                stm.executeUpdate();
            }
        } catch (SQLException e) {
            e.printStackTrace();
            result = "Failed";
        } finally {
            closeConnection();
        }
        return result;
    }

    public String updateArticle(Article article) {
        String result = "Success";
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "update Article set Title='" + article.getTitle() + "'"
                        + ",UpdateBy=" + article.getUpdateBy() + " ,UpdateDate='" + article.getUpdateDate() + "' ,Describe='" + article.getDescribe()
                        + "' where ArticleId=" + article.getArticleId();
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

    public String disableArticle(int id) {
        String result = "Success";
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "update Article set Status=0 where ArticleId=" + id;
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

    public List<Article> getListArticleByStatus(int status) throws SQLException, ClassNotFoundException {
        List<Article> listArticle = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select a.*, u.FullName as uploadByUser, u1.FullName as updateByUser\n"
                        + "from Article a\n"
                        + "left outer join [User] u on u.UserId = a.UploadBy\n"
                        + "left outer join [User] u1 on u1.UserId = a.UpdateBy \n"
                        + "where a.Status=?";
                //select * from Article order by id desc limit 5;
                stm = con.prepareStatement(sql);
                stm.setInt(1, status);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer ArticleId = rs.getInt("ArticleId");
                    Integer categoryId = rs.getInt("CategoryId");
                    String title = rs.getString("Title");
                    Integer uploadBy = rs.getInt("UploadBy");
                    String uploadDate = rs.getString("UploadDate");
                    Integer updateBy = rs.getInt("UpdateBy");
                    String updateDate = rs.getString("UpdateDate");
                    String link = rs.getString("Link");
                    String describe = rs.getString("Describe");
                    String uploadByName = rs.getString("uploadByUser");
                    String updateByName = rs.getString("updateByUser");
                    Article a = new Article(ArticleId, categoryId, uploadBy, updateBy, status, title, uploadDate, updateDate, link, describe, uploadByName, updateByName);
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

    public String activeArticle(int id) {
        String result = "Success";
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "update Article set Status=1 where ArticleId=" + id;
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
    public List<Article> getPageArticle(int page) {
 int rows=3*page;
        List<Article> listArticle = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select a.*, u.FullName as uploadByUser, u1.FullName as updateByUser\n"
                        + "  from Article a left outer join [User] u on u.UserId = a.UploadBy left outer join [User] u1 on u1.UserId = a.UpdateBy where  a.Status=1 ORDER BY UploadDate"
                         + " OFFSET 0 ROWS\n"
                        + "FETCH NEXT "+rows+" ROWS ONLY;";
             
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("ArticleId");
                    String title = rs.getString("Title");
                    Integer categoryId = rs.getInt("CategoryId");
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
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(MeetingDAO.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(MeetingDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            closeConnection();
        }
        return listArticle;
    }
}
