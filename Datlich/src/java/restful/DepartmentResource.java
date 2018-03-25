/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package restful;

import dao.DepartmentDao;
import dto.Department;
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
public class DepartmentResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of DepartmentResource
     */
    public DepartmentResource() {
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
            DepartmentDao dao = new DepartmentDao();
            List<Department> listDepartment = dao.getDepartment();        
            return listDepartment;
    }
}
