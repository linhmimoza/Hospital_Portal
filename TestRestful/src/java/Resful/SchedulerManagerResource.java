/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import Models.ShiftSchedule;
import Models.ShiftSchedulerManager;
import dao.ShiftScheduleDAO;
import dao.ShiftSchedulerManagerDAO;
import java.sql.SQLException;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
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
public class SchedulerManagerResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of SchedulerManagerResource
     */
    public SchedulerManagerResource() {
    }

 @Path("/getManager")
    @GET
    @Produces()
    public ShiftSchedulerManager getShiftManagerByWeek(
    @QueryParam("DepartmentId") int id ,
    @QueryParam("Week") String week) throws SQLException, ClassNotFoundException {
     ShiftSchedulerManagerDAO dao = new ShiftSchedulerManagerDAO();                    
          ShiftSchedulerManager schedule = dao.getShiftSchedulerManager(week, id);       
            return schedule;
    }
    @Path("/getListManager")
    @GET
    @Produces()
    public List<ShiftSchedulerManager> getListShiftManagerByWeek() throws SQLException, ClassNotFoundException {
     ShiftSchedulerManagerDAO dao = new ShiftSchedulerManagerDAO();                    
          List<ShiftSchedulerManager> schedule = dao.getListShiftSchedulerManager();
            return schedule;
    }
     @Path("/getCheckedSchedulerForShow")
    @GET
    @Produces()
    public ShiftSchedule getCheckedSchedulerForShow(
    @QueryParam("DepartmentId") int id ,
    @QueryParam("Week") String week) throws SQLException, ClassNotFoundException {
        ShiftSchedule schedule= new ShiftSchedule();
     ShiftSchedulerManagerDAO dao = new ShiftSchedulerManagerDAO();                    
          ShiftSchedulerManager manage = dao.getShiftSchedulerManager(week, id);  
          if (manage.getChecked()>0){
              ShiftScheduleDAO shiftDao= new ShiftScheduleDAO();
              schedule= shiftDao.getShiftSchedulesById(manage.getChecked());
          }
            return schedule;
    }
}
