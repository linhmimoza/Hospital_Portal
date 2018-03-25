/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package restful;

import dao.MedicalBookingDao;
import dto.MedicalBooking;
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
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author Tung
 */
@Path("MedicalBooking")
public class MedicalBookingResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of MedicalBookingResource
     */
    public MedicalBookingResource() {
    }

    /**
     * Retrieves representation of an instance of restful.MedicalBookingResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getText() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    @Path("/createMedicalBooking")
    @GET
    @Produces()
    public String createMedicalBooking(
            @QueryParam("DepartmentId") int DepartmentId,
            @QueryParam("ServiceId") int ServiceId,
            @QueryParam("TimeId") int TimeId,
            @QueryParam("CreateDate") String CreateDate,
            @QueryParam("GuestName") String GuestName,
            @QueryParam("GuestPhone") String GuestPhone,
            @QueryParam("GuestEmail") String GuestEmail,
            @QueryParam("GuestAddress") String GuestAddress,
            @QueryParam("GuestIdentity") int GuestIdentity,
            @QueryParam("Note") String Note) throws SQLException {
        MedicalBookingDao dao = new MedicalBookingDao();
        return dao.createMedicalBooking(DepartmentId, ServiceId, TimeId, CreateDate, GuestName, GuestPhone, GuestEmail, GuestAddress, GuestIdentity, Note);
    }

    @Path("/getBookingId")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public int getBookingId() throws SQLException, ClassNotFoundException {

        MedicalBookingDao dao = new MedicalBookingDao();
        int id = dao.getBookingId();
        return id;

    }

    @Path("/getListMedicalBooking")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<MedicalBooking> getListMb(@QueryParam("GuestIdentity") int guestIdentity) throws SQLException, ClassNotFoundException {
        MedicalBookingDao dao = new MedicalBookingDao();
        List<MedicalBooking> listMb = dao.getListMb(guestIdentity);
        return listMb;
    }

}
