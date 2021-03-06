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
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;


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
    public User checkLogin(
    @QueryParam("username") String username ,
    @QueryParam("password") String password) throws SQLException, ClassNotFoundException {
    UserDAO dao = new UserDAO();                    
          User user = dao.getLoginUsers(username, password);
          
            return user;
    }

     @Path("/getListUser")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> getListUser() throws SQLException, ClassNotFoundException {
    UserDAO dao = new UserDAO();
            List<User> listUsers = dao.getUsers();
          
            return listUsers;
    }
   @Path("/createUser")
   @POST
   @Produces()
   public boolean createUser(User user){
     UserDAO dao=new UserDAO();   
     return dao.createUser(user);
   }
   @Path("/updateUser")
   @PUT
   @Produces()
   public boolean updateUser(User user){
     UserDAO dao=new UserDAO();   
     return dao.createUser(user);
   }
}
