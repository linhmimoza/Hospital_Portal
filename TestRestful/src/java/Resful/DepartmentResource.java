/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import Models.Department;
import dao.DepartmentDAO;
import dao.UserDAO;
import java.sql.SQLException;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Admin
 */
@Path("generic")
public class DepartmentResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of DepartmentResource
     */
    public DepartmentResource() {
    }

    /**
     * Retrieves representation of an instance of Resful.DepartmentResource
     * @return an instance of java.lang.String
     */
     @Path("/getListDepartment")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Department> getListDepartment() throws SQLException, ClassNotFoundException {
   DepartmentDAO dao = new DepartmentDAO();
            List<Department> listDepartment = dao.getDepartments();        
            return listDepartment;
    }
   @Path("/getDepartmentById/{departmentId}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Department getDepartmentById(@PathParam("departmentId") int departmentId) throws SQLException, ClassNotFoundException {
    DepartmentDAO dao = new DepartmentDAO();                    
          Department department = dao.getDepartmentById(departmentId);    
            return department;
    }
   @POST
   @Path("/updateDepartment")
   @Produces()
   public String updateDepartment(Department department){
     DepartmentDAO dao=new DepartmentDAO();   
     return dao.updateDepartment(department);
   }
   @POST
   @Path("/createDepartment")
   @Produces()
   public String createDepartment(Department department){
     DepartmentDAO dao=new DepartmentDAO();   
     return dao.createDepartment(department);
   }
   @GET
   @Path("/deleteDepartment/{departmentId}")
   @Produces()
   public String deleteDepartment(@PathParam("departmentId") int departmentId){
     DepartmentDAO dao=new DepartmentDAO();   
     return dao.deleteDepartment(departmentId);

   }
    /**
     * PUT method for updating or creating an instance of DepartmentResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.TEXT_PLAIN)
    public void putText(String content) {
    }
    @Path("/getAllDepartment")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Department> getAllDepartment() throws SQLException, ClassNotFoundException {
   DepartmentDAO dao = new DepartmentDAO();
            List<Department> listDepartment = dao.getAllDepartments();        
            return listDepartment;
    }
}
