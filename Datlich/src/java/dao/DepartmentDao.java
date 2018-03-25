/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import db.MyConnection;
import dto.Department;
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
public class DepartmentDao {
    public List<Department> getDepartment() throws SQLException, ClassNotFoundException {
        Connection con = null;
        PreparedStatement stm = null;
        ResultSet rs = null;
        
        List<Department> listDepartment = new ArrayList<>();
        try {
            con = MyConnection.getMyConnection();
            if (con != null){
                String sql = "Select DepartmentId, DepartmentName, Description from Department where Status=1";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()){
                    Integer id = rs.getInt("SpecialistId");
                    String name = rs.getString("SpecialistName");
                    String description = rs.getString("Description");
                    Department d = new Department(id, name, description);
                    listDepartment.add(d);
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
        return listDepartment;
    }
}
