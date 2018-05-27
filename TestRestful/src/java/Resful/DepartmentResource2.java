/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;


import Models.Department;
import dao.DepartmentDAO;
import java.sql.SQLException;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Tung
 */
@Path("Department")
public class DepartmentResource2 {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of DepartmentResource
     */
    public DepartmentResource2() {
    }

    /**
     * Retrieves representation of an instance of restful.DepartmentResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getText() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    @Path("/getListDepartment")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Department> getListSpecialist() throws SQLException, ClassNotFoundException {
            DepartmentDAO dao = new DepartmentDAO();
            List<Department> listDepartment = dao.getDepartments();        
            return listDepartment;
    }
    @Path("/getListUseDepartment")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Department> getListUseDepartment() throws SQLException, ClassNotFoundException {
            DepartmentDAO dao = new DepartmentDAO();
            List<Department> listDepartment = dao.getUseDepartments();       
            return listDepartment;
    }
}
