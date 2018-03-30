/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import Models.Introduce;
import dao.IntroduceDao;
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
import javax.ws.rs.QueryParam;
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

    @Path("/getListIntroduce")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Introduce> getListIntroduce() throws SQLException, ClassNotFoundException {
            IntroduceDao dao = new IntroduceDao();
            List<Introduce> listIntroduce = dao.getIntroduce();        
            return listIntroduce;
    }
    @Path("/createIntroduce")
    @GET
    @Produces()
    public String createIntroduce(
            @QueryParam("Title") String Title,
            @QueryParam("content") String content,
            @QueryParam("uploadBy") int uploadBy,
            @QueryParam("uploadDay") String uploadDay) throws SQLException {
        IntroduceDao dao = new IntroduceDao();
        return dao.createIntroduce(Title, content, uploadBy, uploadDay);
    }
    @Path("/updateIntroduce")
    @GET
    @Produces()
    public String updateIntroduce(
            @QueryParam("Id") int Id,
            @QueryParam("Title") String Title,
            @QueryParam("content") String content,
            @QueryParam("updateBy") int updateBy,
            @QueryParam("updateDay") String updateDay) throws SQLException {
        IntroduceDao dao = new IntroduceDao();
        return dao.updateIntroduce(Id, Title, content, updateBy, updateDay);
    }
    @Path("/disableIntroduce")
    @GET
    @Produces()
    public String disableIntroduce(
            @QueryParam("Id") int Id) throws SQLException {
        IntroduceDao dao = new IntroduceDao();
        return dao.disableIntroduce(Id);
    }
    @Path("/getListIntroduceById")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Introduce> getListIntroduceById( @QueryParam("Id") int Id) throws SQLException, ClassNotFoundException {
            IntroduceDao dao = new IntroduceDao();
            List<Introduce> listIntroduce = dao.getListIntroduceById(Id);        
            return listIntroduce;
    }
    @Path("/activeIntroduce")
    @GET
    @Produces()
    public String activeIntroduce(
            @QueryParam("Id") int Id) throws SQLException {
        IntroduceDao dao = new IntroduceDao();
        return dao.activeIntroduce(Id);
    }
}
