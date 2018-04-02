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
import java.util.ArrayList;
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
        @Path("/getWaitingSchedulerForCheck")
    @GET
    @Produces()
    public ShiftSchedule getWaitingSchedulerForCheck(
    @QueryParam("DepartmentId") int id ,
    @QueryParam("Week") String week) throws SQLException, ClassNotFoundException {
        ShiftSchedule schedule= new ShiftSchedule();
     ShiftSchedulerManagerDAO dao = new ShiftSchedulerManagerDAO();                    
          ShiftSchedulerManager manage = dao.getShiftSchedulerManager(week, id);  
          if (manage.getWaiting()>0){
              ShiftScheduleDAO shiftDao= new ShiftScheduleDAO();
              schedule= shiftDao.getShiftSchedulesById(manage.getWaiting());
              System.out.println(manage.getWaiting());
          }
            return schedule;
    }
     @Path("/checkShiftSchedulerManager")
    @POST
    @Produces()
    public String checkShiftSchedulerManager(ShiftSchedulerManager manage) throws SQLException, ClassNotFoundException {
         ShiftSchedulerManagerDAO dao= new ShiftSchedulerManagerDAO();
         return dao.checkShiftSchedulerManager(manage);
           
    }
     @Path("/getFutureManagerByDepartmentId")
    @GET
    @Produces()
    public List<ShiftSchedulerManager> getFutureManagerByDepartmentId( @QueryParam("DepartmentId") int id ,
    @QueryParam("Week") String week) throws SQLException, ClassNotFoundException {
    ShiftSchedulerManagerDAO dao = new ShiftSchedulerManagerDAO();                    
          List<ShiftSchedulerManager> list = dao.getFutureListManagerByDepId(id,week);         
            return list;
    }
    @Path("/getPassManagerByDepartmentId")
    @GET
    @Produces()
    public List<ShiftSchedulerManager> getPassManagerByDepartmentId( @QueryParam("DepartmentId") int id ,
    @QueryParam("Week") String week) throws SQLException, ClassNotFoundException {
    ShiftSchedulerManagerDAO dao = new ShiftSchedulerManagerDAO();                    
          List<ShiftSchedulerManager> list = dao.getPassListManagerByDepId(id,week);         
            return list;
    }
    @Path("/getSearchManager")
    @GET
    @Produces()
    public List<ShiftSchedulerManager> getSearchManager( @QueryParam("DepartmentId") int id ,
    @QueryParam("Week") String week) throws SQLException, ClassNotFoundException {
    ShiftSchedulerManagerDAO dao = new ShiftSchedulerManagerDAO();                    
          List<ShiftSchedulerManager> list= new ArrayList<>();
                  list.add(dao.getShiftSchedulerManager(week,id));         
            return list;
    }
}
