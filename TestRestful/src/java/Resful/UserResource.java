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
import javax.ws.rs.DELETE;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
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
    @Produces()
    public User checkLogin(
    @QueryParam("username") String username ,
    @QueryParam("password") String password) throws SQLException, ClassNotFoundException {
    UserDAO dao = new UserDAO();                    
          User user = dao.getLoginUsers(username, password);
          
            return user;
    }
     @Path("/getUserById/{userId}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public User getUserById(@PathParam("userId") int userId) throws SQLException, ClassNotFoundException {
    UserDAO dao = new UserDAO();                    
          User user = dao.getUserById(userId);
          
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
   public String createUser(User user){
     UserDAO dao=new UserDAO();   
    return dao.createUser(user);

   }
  
   @POST
   @Path("/updateUser")
   @Produces()
   public String updateUser(User user){
     UserDAO dao=new UserDAO();   
     return dao.updateUser(user);
   }
   @GET
   @Path("/deleteUser/{userId}")
   @Produces()
   public String deleteUser(@PathParam("userId") int userId){
     UserDAO dao=new UserDAO();   
     return dao.deleteUser(userId);

   }
}
