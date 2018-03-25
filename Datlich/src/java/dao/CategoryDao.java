/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import db.MyConnection;
import dto.Category;
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
    private void closeConnection(){
        try{
            if(rs!=null){
                rs.close();
            }if(stm!=null){
                stm.close();
            }if(con!=null){
                con.close();
            }
        }catch(Exception e){
            e.printStackTrace();
        }
    }
    public List<Category> getCategory() throws SQLException, ClassNotFoundException {        
        List<Category> listCategory = new ArrayList<>();
        try {
            con = MyConnection.getMyConnection();
            if (con != null){
                String sql = "Select CategoryId, CategoryName, Description, Status from Category where Status=1";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()){
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
}
