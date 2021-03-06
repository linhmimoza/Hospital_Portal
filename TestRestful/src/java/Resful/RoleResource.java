/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import Models.Role;
import dao.RoleDAO;
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
 * @author Admin
 */
@Path("generic")
public class RoleResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of RoleResource
     */
    public RoleResource() {
    }

    /**
     * Retrieves representation of an instance of Resful.RoleResource
     * @return an instance of java.lang.String
     */
   
 @Path("/getRoles")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Role> getRoles() throws SQLException, ClassNotFoundException {
     RoleDAO dao = new RoleDAO();
            List<Role> listRoles = dao.getRoles();
          
            return listRoles;
    }
 
}
