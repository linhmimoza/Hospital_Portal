/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import dao.ServiceDao;
import dao.TimeDao;
import Models.Service;
import Models.Time;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
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
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author Tung
 */
@Path("time")
public class TimeResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of TimeResource
     */
    public TimeResource() {
    }

    /**
     * Retrieves representation of an instance of restful.TimeResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getText() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }
    
    @Path("/getListTimeAvailable")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Time> getListTimeAvailable() throws SQLException, ClassNotFoundException {
        TimeDao dao = new TimeDao();
        List<Time> listTime = dao.getListTimeAvailable();
        return listTime;
    }

    @Path("/getListTime")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Time> getListTime(@QueryParam("Date") String date, @QueryParam("Available") int available) throws SQLException, ClassNotFoundException {
        TimeDao dao = new TimeDao();
        List<Time> listTime = dao.getListTime(date, available);
        return listTime;
    }

    @Path("/bookingSuccess")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateAmount(@QueryParam("TimeId") int timeId) throws SQLException, ClassNotFoundException {
        TimeDao dao = new TimeDao();
        dao.bookingSuccess(timeId);
        return Response.status(204).build();
    }

    @Path("/checkAvailable")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response checkAvailable() throws SQLException, ClassNotFoundException {
        try {
            TimeDao dao = new TimeDao();
            dao.checkAvailable();
            
        } catch (Exception e) {
            System.out.println("error");
            return Response.status(204).build();
        }
        return Response.status(204).build();
    }
    @Path("/updateLimitAmountTime")
    @GET
    @Produces()
    public String updateLimitAmountTime(
            @QueryParam("Amount") int Amount,
            @QueryParam("date") String date) throws SQLException {
        TimeDao dao = new TimeDao();
        return dao.updateLimitAmountTime(Amount, date);
    }
    @Path("/createTime")
    @POST
    @Produces()
    public String createTime(Time time) throws SQLException {
        TimeDao dao = new TimeDao();
        return dao.createTime(time);
    }

}
