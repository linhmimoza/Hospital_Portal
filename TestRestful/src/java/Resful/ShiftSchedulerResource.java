/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import Models.ShiftSchedule;
import dao.ShiftScheduleDAO;
import java.sql.SQLException;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Admin
 */
@Path("generic")
public class ShiftSchedulerResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of ShiftSchedulerResource
     */
    public ShiftSchedulerResource() {
    }

    /**
     * Retrieves representation of an instance of Resful.ShiftSchedulerResource
     * @return an instance of java.lang.String
     */
   @Path("/getListShiftScheduler")
    @GET
    @Produces()
    public List<ShiftSchedule> getListShiftScheduler() throws SQLException, ClassNotFoundException {
       ShiftScheduleDAO dao = new ShiftScheduleDAO();
            List<ShiftSchedule> listShiftSchedule = dao.getShiftSchedules();         
            return listShiftSchedule;
    }
     @Path("/createShiftScheduler")
    @POST
    @Produces()
    public String createShiftScheduler(ShiftSchedule scheduler) throws SQLException, ClassNotFoundException {
         ShiftScheduleDAO dao= new ShiftScheduleDAO();
         return dao.createShiftScheduler(scheduler);
           
    }
 @GET
    @Produces()
    public String updateEmployee() {
        return "test ok";
    }
}
