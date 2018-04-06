/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import dao.CategoryDao;
import Models.Category;
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

/**
 * REST Web Service
 *
 * @author Tung
 */
@Path("Category")
public class CategoryResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of CategoryResource
     */
    public CategoryResource() {
    }

    /**
     * Retrieves representation of an instance of restful.CategoryResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getText() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    @Path("/getListCategory")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Category> getListCategory() throws SQLException, ClassNotFoundException {
            CategoryDao dao = new CategoryDao();
            List<Category> listCategory = dao.getCategory();        
            return listCategory;
    }
    @Path("/getAllListCategory")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Category> getAllListCategory() throws SQLException, ClassNotFoundException {
            CategoryDao dao = new CategoryDao();
            List<Category> listCategory = dao.getAllCategory();        
            return listCategory;
    }
    @Path("/getListCategoryById")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Category> getListCategoryById( @QueryParam("CategoryId") int CategoryId) throws SQLException, ClassNotFoundException {
            CategoryDao dao = new CategoryDao();
            List<Category> listCategory = dao.getListCategoryById(CategoryId);        
            return listCategory;
    }
    @Path("/getListCategoryByName")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Category> getListCategoryByName( @QueryParam("CategoryName") String CategoryName) throws SQLException, ClassNotFoundException {
            CategoryDao dao = new CategoryDao();
            List<Category> listCategory = dao.getListCategoryByName(CategoryName);        
            return listCategory;
    }
    @Path("/createCategory")
    @POST
    @Produces()
    public String createCategory(Category category) throws SQLException {
        CategoryDao dao = new CategoryDao();
        return dao.createCategory(category);
    }
    @Path("/updateCategory")
    @POST
    @Produces()
    public String updateCategory(Category category) throws SQLException {
        CategoryDao dao = new CategoryDao();
        return dao.updateCategory(category);
    }
    @Path("/disableCategory")
    @GET
    @Produces()
    public String disableCategory(
            @QueryParam("CategoryId") int CategoryId) throws SQLException {
        CategoryDao dao = new CategoryDao();
        return dao.disableCategory(CategoryId);
    }
    @Path("/activeCategory")
    @GET
    @Produces()
    public String activeCategory(
            @QueryParam("CategoryId") int CategoryId) throws SQLException {
        CategoryDao dao = new CategoryDao();
        return dao.activeCategory(CategoryId);
    }
}
