/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import Models.Category;
import dao.CategoryDAO;
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

/**
 * REST Web Service
 *
 * @author Admin
 */
@Path("generic")
public class CategoryResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of CategoryResource
     */
    public CategoryResource() {
    }
@Path("/getListCategory")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Category> getListCategory() throws SQLException, ClassNotFoundException {
       CategoryDAO dao = new CategoryDAO();
            List<Category> listCategory = dao.getCategories();         
            return listCategory;
    }
   
}
