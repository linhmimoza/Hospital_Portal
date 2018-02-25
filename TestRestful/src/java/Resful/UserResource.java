/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import Models.User;
import dao.UserDAO;
import java.sql.SQLException;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
//import net.sf.json.JSONArray;
//import net.sf.json.JSONObject;

/**
 * REST Web Service
 *
 * @author Admin
 */
@Path("generic")
public class UserResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of UserResource
     */
    public UserResource() {
    }

    /**
     * Retrieves representation of an instance of Resful.UserResource
     * @return an instance of java.lang.String
     */
     @Path("/checkLogin")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> checkLogin() throws SQLException, ClassNotFoundException {
    UserDAO dao = new UserDAO();
                            System.out.println("aaaaa");
            List<User> listUsers = dao.getUsers();
//            JSONArray arrayObj= new JSONArray();
//            for (User user:listUsers){
//                JSONObject userObj= JSONObject.fromObject(user);
//                     System.out.println(userObj.toString());
//                arrayObj.add(userObj);
//            }
            return listUsers;
    }

    /**
     * PUT method for updating or creating an instance of UserResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(javax.ws.rs.core.MediaType.TEXT_PLAIN)
    public void putText(String content) {
    }
}
