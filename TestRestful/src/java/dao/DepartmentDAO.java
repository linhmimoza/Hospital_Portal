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
import java.util.List;
import Models.Department;

/**
 *
 * @author Admin
 */
public class DepartmentDAO implements Serializable {

    public List<Department> getDepartments() throws SQLException, ClassNotFoundException {
        Connection con = null;
        PreparedStatement stm = null;
        ResultSet rs = null;

        List<Department> listDepartments = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select DepartmentId, DepartmentName, Description, Status from Department";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("DepartmentId");
                    String departmentName = rs.getString("DepartmentName");
                    String description = rs.getString("Description");
                    Integer status = rs.getInt("Status");
                    Department department = new Department(id, departmentName, description, status);
                    listDepartments.add(department);
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
        return listDepartments;
    }
}
