/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import Models.Notification;
import dao.NotificationDAO;
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
public class NotificationResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of NotificationResource
     */
    public NotificationResource() {
    }

    /**
     * Retrieves representation of an instance of Resful.NotificationResource
     * @return an instance of java.lang.String
     */
     @Path("/getListNotification")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Notification> getListNotification() throws SQLException, ClassNotFoundException {
         NotificationDAO dao = new NotificationDAO();
            List<Notification> listShiftSchedule = dao.getNotifications();         
            return listShiftSchedule;
    }
  @Path("/createNotification")
   @POST
   @Produces()
   public String createNotification(Notification notification){
     NotificationDAO dao=new NotificationDAO();   
    return dao.createNotification(notification);

   }
     @Path("/updateNotification")
   @POST
   @Produces()
   public String updateNotification(Notification notification){
     NotificationDAO dao=new NotificationDAO();   
    return dao.updateNotification(notification);

   }
}
