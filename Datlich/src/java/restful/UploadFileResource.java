///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//package restful;
//
//
//
//import java.io.File;  
//import java.io.FileOutputStream;  
//import java.io.IOException;  
//import java.io.InputStream;  
//import java.io.PrintWriter;
//import java.nio.file.Paths;
//
//import javax.servlet.ServletException;
//import javax.servlet.annotation.MultipartConfig;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.Part;
//import javax.ws.rs.Consumes;  
//import javax.ws.rs.GET;
//import javax.ws.rs.POST;  
//import javax.ws.rs.Path;  
//import javax.ws.rs.Produces;
//import javax.ws.rs.core.Context;
//import javax.ws.rs.core.MediaType;  
//import javax.ws.rs.core.Response;  
//import javax.ws.rs.core.UriInfo;
////import org.glassfish.jersey.media.multipart.FormDataContentDisposition;  
////import org.glassfish.jersey.media.multipart.FormDataParam;  
//
//import java.util.List;
//import java.util.stream.Collectors;
//import javax.servlet.annotation.WebServlet;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.Part;
//
///**
// * REST Web Service
// *
// * @author Tung
// */
//@Path("UploadFile")
//@MultipartConfig
//public class UploadFileResource {
//    public static final String SAVE_DIRECTORY = "D:\\cv";
//    @Context
//    private UriInfo context;
//
//    /**
//     * Creates a new instance of UploadFileResource
//     */
//    public UploadFileResource() {
//    }
//
//    /**
//     * Retrieves representation of an instance of restful.UploadFileResource
//     *
//     * @return an instance of java.lang.String
//     */
//    @GET
//    @Produces(MediaType.TEXT_PLAIN)
//    public String getText() {
//        //TODO return proper representation object
//        throw new UnsupportedOperationException();
//    }
//    @POST
//    @Path("/upload")
//    @Consumes(MediaType.MULTIPART_FORM_DATA)  
//    public Response uploadFile(@Context HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
//        
//        String description = request.getParameter("description"); // Retrieves <input type="text" name="description">
//        Part filePart = request.getPart("file"); // Retrieves <input type="file" name="file">
//        String fileName = Paths.get(filePart.getSubmittedFileName()).getFileName().toString(); // MSIE fix.
//        InputStream fileContent = filePart.getInputStream();
//        
//        PrintWriter out = response.getWriter();
//        
//        out.println(fileName);
//        return Response.status(200).build();
//   }
////    @POST  
////    @Path("/upload")  
////    @Consumes(MediaType.MULTIPART_FORM_DATA)  
////    public Response uploadFile(  
////            @FormDataParam("file") InputStream uploadedInputStream,  
////            @FormDataParam("file") FormDataContentDisposition fileDetail
////    ) {  
////            String fileLocation = "d://" + fileDetail.getFileName();  
////                    //saving file  
////            try {  
////                FileOutputStream out = new FileOutputStream(new File(fileLocation));  
////                int read = 0;  
////                byte[] bytes = new byte[1024];  
////                out = new FileOutputStream(new File(fileLocation));  
////                while ((read = uploadedInputStream.read(bytes)) != -1) {  
////                    out.write(bytes, 0, read);  
////                }  
////                out.flush();  
////                out.close();  
////            } catch (IOException e) {e.printStackTrace();}  
////            String output = "File successfully uploaded to : " + fileLocation;  
////            return Response.status(200).build();  
////        }  
//}
