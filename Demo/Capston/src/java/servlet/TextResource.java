/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Admin
 */
@Path("generic")
public class TextResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of TextResource
     */
    public TextResource() {
    }

    /**
     * Retrieves representation of an instance of servlet.TextResource
     * @return an instance of java.lang.String
     */
    @Path("/checkLogin")
    @GET
    @Produces("text/plain")
    public String checkLogin( 
        @QueryParam("username") String username,
        @QueryParam("password") String password) {
 
        throw new UnsupportedOperationException();
    }

    /**
     * PUT method for updating or creating an instance of TextResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.TEXT_PLAIN)
    public void putText(String content) {
    }
}
