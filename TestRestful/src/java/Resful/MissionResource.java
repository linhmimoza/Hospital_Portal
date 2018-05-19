/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import Function.App;
import Models.Mission;
import Models.ShiftDay;
import dao.MissionDAO;
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
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Admin
 */
@Path("generic")
public class MissionResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of MissionResource
     */
    public MissionResource() {
        
    }
 @Path("/getListMission")
    @GET
    @Produces()
    public List<Mission> getListMission() throws SQLException, ClassNotFoundException {
    MissionDAO dao = new MissionDAO();
            List<Mission> listMission = dao.getMissions();         
            return listMission;
    }
    @Path("/getWaitingMissions")
    @GET
    @Produces()
    public List<Mission> getWaitingMissions() throws SQLException, ClassNotFoundException {
    MissionDAO dao = new MissionDAO();
            List<Mission> listMission = dao.getWaitingMissions();         
            return listMission;
    }
     @Path("/getCheckedMissions")
    @GET
    @Produces()
    public List<Mission> getCheckedMissions() throws SQLException, ClassNotFoundException {
    MissionDAO dao = new MissionDAO();
            List<Mission> listMission = dao.getCheckedMissions();         
            return listMission;
    }
    
 @Path("/getMissionById/{missionId}")
    @GET
    @Produces()
    public Mission getMissionById(@PathParam("missionId") int missionId) throws SQLException, ClassNotFoundException {
    MissionDAO dao = new MissionDAO();                    
          Mission mission = dao.getMissionById(missionId);        
            return mission;
    }
@Path("/createMission")
   @POST
   @Produces()
   public String createMission(Mission mission){
       
     MissionDAO dao=new MissionDAO();   
    return dao.createMission(mission);
   }
   @Path("/updateMission")
   @POST
   @Produces()
   public String updateMission(Mission mission){
     MissionDAO dao=new MissionDAO();   
    return dao.updateMission(mission);
   }
   @Path("/geMissionByUser/{userId}")
    @GET
    @Produces()
    public List<Mission> geMissionByUser(@PathParam("userId") int missionId) throws SQLException, ClassNotFoundException {
    MissionDAO dao = new MissionDAO();
            List<Mission> listMission = dao.getMissionByUser(missionId);         
            return listMission;
    }
    @Path("/geAllMissionByUser/{userId}")
    @GET
    @Produces()
    public List<Mission> geAllMissionByUser(@PathParam("userId") int missionId) throws SQLException, ClassNotFoundException {
    MissionDAO dao = new MissionDAO();
            List<Mission> listMission = dao.getAllMissionByUser(missionId);         
            return listMission;
    }
     @Path("/activateMission")
   @POST
   @Produces()
   public void activateMission(Mission mission){
         App app=new App();   
    app.activateMission(mission);
   }
   @Path("/testUser")
   @POST
   @Produces()
   public  List<Mission> testUser(Mission mission){
     MissionDAO dao=new MissionDAO();   
    return dao.getUserMissionInDateRange(mission);
   }
   @Path("/testDate")
   @POST
   @Produces()
   public  List<ShiftDay> testDate(Mission mission){
     MissionDAO dao=new MissionDAO();   
    return dao.getShiftDaysByUser(mission);
   }
}
