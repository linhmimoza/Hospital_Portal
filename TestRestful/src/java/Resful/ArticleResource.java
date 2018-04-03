/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import dao.ArticleDao;
import Models.Article;
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
@Path("Article")
public class ArticleResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of ArticleResource
     */
    public ArticleResource() {
    }

    /**
     * Retrieves representation of an instance of restful.ArticleResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getText() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }
    @Path("/getAllListArticle")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Article> getAllListArticle(@QueryParam("CategoryId") int categoryId) throws SQLException, ClassNotFoundException {
        ArticleDao dao = new ArticleDao();
        List<Article> listArticle = dao.getAllListArticle(categoryId);
        return listArticle;
    }

    @Path("/getListArticle")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Article> getListSService(@QueryParam("CategoryId") int categoryId) throws SQLException, ClassNotFoundException {
        ArticleDao dao = new ArticleDao();
        List<Article> listArticle = dao.getListArticle(categoryId);
        return listArticle;
    }

    @Path("/getTopListArticle")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Article> getTopListSService() throws SQLException, ClassNotFoundException {
        ArticleDao dao = new ArticleDao();
        List<Article> listArticle = dao.getTopListArticle();
        return listArticle;
    }

    @Path("/getListArticleById")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Article> getListArticleById(@QueryParam("Id") int id) throws SQLException, ClassNotFoundException {
        ArticleDao dao = new ArticleDao();
        List<Article> listArticle = dao.getListArticleById(id);
        return listArticle;
    }
    
    @Path("/getListArticleByTitle")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Article> getListArticleByTitle(@QueryParam("Title") String Title) throws SQLException, ClassNotFoundException {
        ArticleDao dao = new ArticleDao();
        List<Article> listArticle = dao.getListArticleByTitle(Title);
        return listArticle;
    }

    @Path("/createArticle")
    @GET
    @Produces()
    public String createArticle(
            @QueryParam("Title") String Title,
            @QueryParam("CategoryId") int CategoryId,
            @QueryParam("UploadBy") int UploadBy,
            @QueryParam("UploadDate") String UploadDate,
            @QueryParam("Link") String Link,
            @QueryParam("Describe") String Describe) throws SQLException, ClassNotFoundException {
        ArticleDao dao = new ArticleDao();
        return dao.createArticle(Title, CategoryId, UploadBy, UploadDate, Link, Describe);
    }

    @Path("/updateArticle")
    @GET
    @Produces()
    public String updateArticle(
            @QueryParam("ArticleId") int id,
            @QueryParam("Title") String Title,
            @QueryParam("Describe") String Describe,
            @QueryParam("UpdateBy") int UpdateBy,
            @QueryParam("UpdateDate") String UpdateDate) throws SQLException {
        
        ArticleDao dao = new ArticleDao();
        return dao.updateArticle(id, Title, Describe, UpdateBy, UpdateDate);
    }

    @Path("/disableArticle")
    @GET
    @Produces()
    public String disableArticle(
            @QueryParam("ArticleId") int ArticleId) throws SQLException {
        ArticleDao dao = new ArticleDao();
        return dao.disableArticle(ArticleId);
    }

    @Path("/getListArticleByStatus")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Article> getListArticleByStatus(@QueryParam("Status") int status) throws SQLException, ClassNotFoundException {
        ArticleDao dao = new ArticleDao();
        List<Article> listArticle = dao.getListArticleByStatus(status);
        return listArticle;
    }

    @Path("/activeArticle")
    @GET
    @Produces()
    public String activeArticle(
            @QueryParam("ArticleId") int ArticleId) throws SQLException {
        ArticleDao dao = new ArticleDao();
        return dao.activeArticle(ArticleId);
    }
}
