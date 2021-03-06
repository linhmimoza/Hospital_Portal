/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import Models.Article;
import Models.Category;
import dao.ArticleDao;
import dao.CategoryDao;
import dao.TimeDao;
import java.sql.SQLException;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author Admin
 */
@Path("generic")
public class ArticleResource2 {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of ArticleResource2
     */
    public ArticleResource2() {
    }

    @Path("/getArticleByUser/{userId}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Article> getArticleByUser(@PathParam("userId") int userId) throws SQLException, ClassNotFoundException {
        ArticleDao dao = new ArticleDao();
        List<Article> listArticle = dao.getArticleByUser(userId);
        return listArticle;
    }
     @Path("/getListCategory")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Category> getListCategory() throws SQLException, ClassNotFoundException {
         CategoryDao dao = new CategoryDao();
        List<Category> list = dao.getAllCategory();
        return list;
    }
     @Path("/getArticleByCategory/{categoryId}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Article> getArticleByCategoryId(@PathParam("categoryId") int categoryId) throws SQLException, ClassNotFoundException {
        ArticleDao dao = new ArticleDao();
        List<Article> listArticle = dao.getArticleByCategory(categoryId);
        return listArticle;
    }
    @Path("/checkAvailable")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response checkAvailable() throws SQLException, ClassNotFoundException {
        try {
            TimeDao dao = new TimeDao();
            dao.checkAvailable();

        } catch (Exception e) {
            System.out.println("error");
            return Response.status(204).build();
        }
        return Response.status(204).build();
    }
}
