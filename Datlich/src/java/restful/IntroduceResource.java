/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package restful;

import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Tung
 */
@Path("Introduce")
public class IntroduceResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of IntroduceResource
     */
    public IntroduceResource() {
    }

    /**
     * Retrieves representation of an instance of restful.IntroduceResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_XML)
    public String getXml() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    /**
     * PUT method for updating or creating an instance of IntroduceResource
     * @param content representation for the resource
     */
    @Path("/test")
    @POST
    @Consumes(MediaType.APPLICATION_XML)
    public String putXml(String content) {
        return "POST";
    }
    
}
