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
import Models.Category;
import java.util.logging.Level;
import java.util.logging.Logger;

public class CategoryDAO implements Serializable {
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

    public List<Category> getCategories() {
      
        List<Category> listCategories = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select CategoryId, CategoryName, Description, Status from Category";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("CategoryId");
                    String categoryName = rs.getString("CategoryName");
                    String description = rs.getString("Description");
                    Integer status = rs.getInt("Status");                  
                    Category cate = new Category(id, categoryName, description, status);
                    listCategories.add(cate);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
        Logger.getLogger(CategoryDAO.class.getName()).log(Level.SEVERE, null, ex);
    } finally {
   closeConnection();
        }
        return listCategories;
    }

}
