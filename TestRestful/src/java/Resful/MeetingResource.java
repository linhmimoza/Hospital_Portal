/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import Models.Meeting;
import dao.MeetingDAO;
import java.sql.SQLException;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
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
public class MeetingResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of MeetingResource
     */
    public MeetingResource() {
    }

 @Path("/getListMeeting")
    @GET
    @Produces()
    public List<Meeting> getListDepartment() throws SQLException, ClassNotFoundException {
   MeetingDAO dao = new MeetingDAO();
            List<Meeting> listMeeting = dao.getMeetings();        
            return listMeeting;
    }
     @Path("/getCheckedMeeting")
    @GET
    @Produces()
    public List<Meeting> getCheckedMeeting() throws SQLException, ClassNotFoundException {
   MeetingDAO dao = new MeetingDAO();
            List<Meeting> listMeeting = dao.getCheckedMeetings();        
            return listMeeting;
    }
     @Path("/getWaitingMeeting")
    @GET
    @Produces()
    public List<Meeting> getWaitingMeeting() throws SQLException, ClassNotFoundException {
   MeetingDAO dao = new MeetingDAO();
            List<Meeting> listMeeting = dao.getWaitingMeetings();        
            return listMeeting;
    }
    @Path("/getFutureMeeting")
    @GET
    @Produces()
    public List<Meeting> getFutureMeeting(@QueryParam("page") int page) throws SQLException, ClassNotFoundException {
   MeetingDAO dao = new MeetingDAO();
            List<Meeting> listMeeting = dao.getFutureMeetings(page);        
            return listMeeting;
    }
    @Path("/getPassMeeting")
    @GET
    @Produces()
    public List<Meeting> getPassMeeting(@QueryParam("page") int page ) throws SQLException, ClassNotFoundException {
   MeetingDAO dao = new MeetingDAO();
            List<Meeting> listMeeting = dao.getPassMeetings(page);        
            return listMeeting;
    }
    @Path("/getMeetingInRange")
    @GET
    @Produces()
    public List<Meeting> getMeetingInRange(@QueryParam("status") int status,
           @QueryParam("from") String from ,
            @QueryParam("to") String to) throws SQLException, ClassNotFoundException {
   MeetingDAO dao = new MeetingDAO();
            List<Meeting> listMeeting = dao.getMeetingInRange(from, to, status);        
            return listMeeting;
    }
    @Path("/getMeetingById/{meetingId}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Meeting getMeetingrById(@PathParam("meetingId") int meetingId) throws SQLException, ClassNotFoundException {
    MeetingDAO dao = new MeetingDAO();                    
          Meeting meeting = dao.getMeetingById(meetingId);
          
            return meeting;
    }
}
