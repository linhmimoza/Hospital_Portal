/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package restful;

import java.io.File;
import java.nio.file.Paths;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

/**
 * REST Web Service
 *
 * @author Tung
 */
@Path("DownloadFile")
public class DownloadFileResource {
    private static final String FILE_PATH = "d:\\";  

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of DownloadFileResource
     */
    public DownloadFileResource() {
    }

    /**
     * Retrieves representation of an instance of restful.DownloadFileResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getText() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    @GET  
    @Path("DownloadFile")  
    @Produces("text/plain")  
    public Response getFile(@QueryParam("FileName") String filename) {

        File file = new File(FILE_PATH + filename);  
   
        ResponseBuilder response = Response.ok((Object) file);  
        response.header("Content-Disposition","attachment; filename=\"download.doc\"");  
        return response.build();  
   
    }  
}
