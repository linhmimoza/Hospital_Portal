/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package restful;

import dao.BookingNumberDao;
import java.sql.SQLException;
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
@Path("BookingNumber")
public class BookingNumberResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of BookingNumberResource
     */
    public BookingNumberResource() {
    }

    /**
     * Retrieves representation of an instance of restful.BookingNumberResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_XML)
    public String getXml() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    @Path("/createBookingNumber")
    @GET
    @Produces()
    public String createBookingNumber(@QueryParam("BookingId") int BookingId) throws SQLException, ClassNotFoundException {

        BookingNumberDao dao = new BookingNumberDao();
        return dao.createBookingNumber(BookingId);
    }

    @Path("/resetBookingNumber")
    @POST
    @Produces()
    public String resetBookingNumber() throws SQLException, ClassNotFoundException {
        BookingNumberDao dao = new BookingNumberDao();
        return dao.resetBookingNumber();
    }
}
