/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import dao.MedicalBookingDao;
import Models.MedicalBooking;
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
    @POST
    @Produces()
    public Response createMedicalBooking(MedicalBooking mb) throws SQLException {
        MedicalBookingDao dao = new MedicalBookingDao();
        String result = dao.createMedicalBooking(mb);
        if (result == "Failed") {
            return Response.status(500).build();
        } else if (result == "Existed") {
            return Response.status(400).build();
        }
        return Response.status(200).build();
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
    public List<MedicalBooking> getListMb(@QueryParam("GuestPhone") String guestPhone) throws SQLException, ClassNotFoundException {
        MedicalBookingDao dao = new MedicalBookingDao();
        List<MedicalBooking> listMb = dao.getListMb(guestPhone);
        return listMb;
    }

    @Path("/getListMedicalBookingAdmin")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<MedicalBooking> getListMbAdmin() throws SQLException, ClassNotFoundException {
        MedicalBookingDao dao = new MedicalBookingDao();
        List<MedicalBooking> listMb = dao.getListMbAdmin();
        return listMb;
    }

    @Path("/getListMbAdminByName")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<MedicalBooking> getListMbAdminByName(@QueryParam("GuestName") String GuestName) throws SQLException, ClassNotFoundException {
        MedicalBookingDao dao = new MedicalBookingDao();
        List<MedicalBooking> listMb = dao.getListMbAdminByName(GuestName);
        return listMb;
    }

    @Path("/createBookingNumber")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String createBookingNumber(
            @QueryParam("BookingId") int BookingId,
            @QueryParam("date") String date) throws SQLException {
        MedicalBookingDao dao = new MedicalBookingDao();
        return dao.createBookingNumber(BookingId, date);
    }

    @Path("/createIntendTime")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String createIntendTime(@QueryParam("BookingId") int BookingId) throws SQLException {
        MedicalBookingDao dao = new MedicalBookingDao();
        return dao.createIntendTime(BookingId);
    }

}
