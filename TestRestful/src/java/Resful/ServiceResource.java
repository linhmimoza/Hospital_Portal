/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import dao.ServiceDao;
import Models.Service;
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
@Path("service")
public class ServiceResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of ServiceResource
     */
    public ServiceResource() {
    }

    /**
     * Retrieves representation of an instance of restful.ServiceResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getText() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }
    
    @Path("/getAllListService")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Service> getAllListSService( @QueryParam("DepartmentId") int departmentId) throws SQLException, ClassNotFoundException {
            ServiceDao dao = new ServiceDao();
            List<Service> listService = dao.getAllListService(departmentId);        
            return listService;
    }
    
    @Path("/getListService")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Service> getListSService( @QueryParam("DepartmentId") int departmentId) throws SQLException, ClassNotFoundException {
            ServiceDao dao = new ServiceDao();
            List<Service> listService = dao.getListService(departmentId);        
            return listService;
    }
    @Path("/getListServiceById")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Service> getListSServiceById( @QueryParam("ServiceId") int serviceId) throws SQLException, ClassNotFoundException {
            ServiceDao dao = new ServiceDao();
            List<Service> listService = dao.getListServiceById(serviceId);        
            return listService;
    }
    @Path("/getListServiceByName")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Service> getListSServiceByName( @QueryParam("ServiceName") String ServiceName) throws SQLException, ClassNotFoundException {
            ServiceDao dao = new ServiceDao();
            List<Service> listService = dao.getListServiceByName(ServiceName);        
            return listService;
    }
    @Path("/createService")
    @POST
    @Produces()
    public Response createService(Service service) throws SQLException {
        ServiceDao dao = new ServiceDao();
        String result = dao.createService(service);
        if (result == "Failed") {
            return Response.status(500).build();
        } else if (result == "Existed") {
            return Response.status(400).build();
        }
        return Response.status(200).build();
    }
    @Path("/updateService")
    @POST
    @Produces()
    public Response updateService(Service service) throws SQLException {
        ServiceDao dao = new ServiceDao();
        String result = dao.updateService(service);
        if (result == "Failed") {
            return Response.status(500).build();
        }
        return Response.status(200).build();
    }
    @Path("/disableService")
    @GET
    @Produces()
    public String disableService(
            @QueryParam("ServiceId") int ServiceId) throws SQLException {
        ServiceDao dao = new ServiceDao();
        return dao.disableService(ServiceId);
    }
    @Path("/getListServiceByStatus")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Service> getListServiceByStatus( @QueryParam("Status") int status) throws SQLException, ClassNotFoundException {
            ServiceDao dao = new ServiceDao();
            List<Service> listService = dao.getListServiceByStatus(status);        
            return listService;
    }
    @Path("/activeService")
    @GET
    @Produces()
    public String activeService(
            @QueryParam("ServiceId") int ServiceId) throws SQLException {
        ServiceDao dao = new ServiceDao();
        return dao.activeService(ServiceId);
    }
}
