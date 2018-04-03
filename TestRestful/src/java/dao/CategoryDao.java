/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import DBUtils.DBUtils;
import Models.Category;
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
public class CategoryDao {

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

    public List<Category> getAllCategory() throws SQLException, ClassNotFoundException {
        List<Category> listCategory = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select CategoryId, CategoryName, Description, Status from Category";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer categoryId = rs.getInt("CategoryId");
                    String name = rs.getString("CategoryName");
                    String description = rs.getString("Description");
                    Integer status = rs.getInt("Status");
                    Category ca = new Category(categoryId, status, name, description);
                    listCategory.add(ca);
                }
            }
        } finally {
            closeConnection();
        }
        return listCategory;
    }

    public List<Category> getCategory() throws SQLException, ClassNotFoundException {
        List<Category> listCategory = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select CategoryId, CategoryName, Description, Status from Category where Status=1";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer categoryId = rs.getInt("CategoryId");
                    String name = rs.getString("CategoryName");
                    String description = rs.getString("Description");
                    Integer status = rs.getInt("Status");
                    Category ca = new Category(categoryId, status, name, description);
                    listCategory.add(ca);
                }
            }
        } finally {
            closeConnection();
        }
        return listCategory;
    }

    public List<Category> getListCategoryById(int CategoryId) throws SQLException, ClassNotFoundException {
        List<Category> listCategory = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select CategoryId, CategoryName, Description, Status from Category where CategoryId=?";
                stm = con.prepareStatement(sql);
                stm.setInt(1, CategoryId);
                rs = stm.executeQuery();
                while (rs.next()) {
                    String name = rs.getString("CategoryName");
                    String description = rs.getString("Description");
                    Integer status = rs.getInt("Status");
                    Category ca = new Category(CategoryId, status, name, description);
                    listCategory.add(ca);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        return listCategory;
    }

    public List<Category> getListCategoryByName(String CategoryName) throws SQLException, ClassNotFoundException {
        List<Category> listCategory = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select CategoryId, CategoryName, Description, Status from Category where CategoryName like '%"+ CategoryName +"%'";
                stm = con.prepareStatement(sql);
                stm.setString(1, CategoryName);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer CategoryId = rs.getInt("CategoryId");
                    String description = rs.getString("Description");
                    String name = rs.getString("CategoryName");
                    Integer status = rs.getInt("Status");
                    Category ca = new Category(CategoryId, status, name, description);
                    listCategory.add(ca);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        return listCategory;
    }

    public boolean isNameExited(String CategoryName) {
        boolean result = false;
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "select CategoryId from Category where  CategoryName='" + CategoryName.trim() + "'";
                stm = con.prepareStatement(sql);
                System.out.println(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    result = true;
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            ex.printStackTrace();

        } finally {
            closeConnection();
        }
        return result;
    }

    public String createCategory(String CategoryName, String Description) throws SQLException {

        String result = "Success";
        if (isNameExited(CategoryName)) {
            result = "Name exited";
        } else {
            try {
                con = DBUtils.makeConnection();
                if (con != null) {
                    String sql = "insert into Category(CategoryName,Description,Status)values(?,?,1)";
                    stm = con.prepareStatement(sql);
                    stm.setString(1, CategoryName);
                    stm.setString(2, Description);
                    stm.executeUpdate();
                }
            } catch (Exception e) {
                e.printStackTrace();
                result = "Failed";
            } finally {
                closeConnection();
            }
        }
        return result;
    }

    public String updateCategory(int id, String CategoryName, String Description) {
        String result = "Success";
        if (isNameExited(CategoryName)) {
            result = "Name existed";
        } else {
            try {
                con = DBUtils.makeConnection();
                if (con != null) {
                    String sql = "update Category set CategoryName='" + CategoryName + "'"
                            + ",Description='" + Description
                            + "' where CategoryId=" + id;
                    stm = con.prepareStatement(sql);
                    stm.executeUpdate();

                }
            } catch (Exception e) {
                e.printStackTrace();
                result = "Failed";
            } finally {
                closeConnection();
            }
        }
        return result;
    }

    public String disableCategory(int id) {
        String result = "Success";
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "update Category set Status=0 where CategoryId=" + id;
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

    public String activeCategory(int id) {
        String result = "Success";
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "update Service set Status=1 where CategoryId=" + id;
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
