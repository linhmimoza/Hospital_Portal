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
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

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
    @Path("/createService")
    @GET
    @Produces()
    public String createService(
            @QueryParam("ServiceName") String ServiceName,
            @QueryParam("Description") String Description,
            @QueryParam("DepartmentId") int DepartmentId) throws SQLException {
        ServiceDao dao = new ServiceDao();
        return dao.createService(ServiceName, Description, DepartmentId);
    }
    @Path("/updateService")
    @GET
    @Produces()
    public String updateService(
            @QueryParam("ServiceId") int ServiceId,
            @QueryParam("ServiceName") String ServiceName,
            @QueryParam("Description") String Description,
            @QueryParam("DepartmentId") int DepartmentId) throws SQLException {
        ServiceDao dao = new ServiceDao();
        return dao.updateService(ServiceId, ServiceName, Description, DepartmentId);
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
