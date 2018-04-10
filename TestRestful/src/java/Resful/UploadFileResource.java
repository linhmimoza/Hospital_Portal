package Resful;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Random;
import javax.servlet.annotation.MultipartConfig;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;
import javax.servlet.ServletContext;
import javax.ws.rs.core.Response;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

/**
 * REST Web Service
 *
 * @author Tung
 */
@Path("UploadFile")
@MultipartConfig
public class UploadFileResource {

    @Context
    private UriInfo context;

    @Context
    private ServletContext application;

    /**
     * Creates a new instance of UploadFileResource
     */
    public UploadFileResource() {
    }

    /**
     * Retrieves representation of an instance of restful.UploadFileResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getText() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }
//    @POST
//    @Path("/UploadFile")
//    @Consumes(MediaType.MULTIPART_FORM_DATA)
//    @Produces("text/xml")
//    public String uploadFile(FormDataMultiPart form,
//            @FormDataParam("txtName") String name) {
//        FormDataBodyPart filePart = form.getField("file");
//        ContentDisposition headerOfFile = filePart.getContentDisposition();
//        InputStream fileInput = filePart.getValueAs(InputStream.class);
//        String imgPath = application.getRealPath("") + "\\imgs\\" + headerOfFile.getFileName();
//        int size = 0;
//        int read = 0;
//        try (OutputStream outpuStream = new FileOutputStream(new File(imgPath))) {
//            byte[] bytes = new byte[1024];
//            while ((read = fileInput.read(bytes)) != -1) {
//                outpuStream.write(bytes, 0, read);
//                size += read;
//            }
//            outpuStream.flush();
//        } catch (Exception e) {
//            return "<result>"+e.toString()+"</result>";
//        }
//        NumberFormat f = NumberFormat.getNumberInstance(Locale.ENGLISH);
//        String rs = "<result>"
//                + "<name>" + name + "</name>"
//                    + "<url>"
//                        + application.getContextPath() + "/imgs/" + headerOfFile.getFileName()
//                    + "</url>"
//                    + "<fileInfo>"
//                        + "<size>" + f.format(size) + " bytes</size>"
//                        + "<type>" + filePart.getMediaType()+ "</type>"
//                        + "<uploadDate>"
//                            + Calendar.getInstance().getTime().toString()
//                        + "</uploadDate>"
//                    + "</fileInfo>"
//                + "</result>";
//        return rs;
//    }

    @POST
    @Path("/upload")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces()
    public String uploadFile(
            @FormDataParam("file") InputStream uploadedInputStream,
            @FormDataParam("file") FormDataContentDisposition fileDetail) {
//        String fileLocation = "D://std//doan//FileUpload//" + fileDetail.getFileName();
        String newname = getSaltString();        
        File filename = new File("Hospital_Portal//FileUpload//" + newname);
        String fileLocation = filename.getAbsolutePath();
        System.out.println(fileLocation);
        File file = new File(fileLocation);
        file.getParentFile().mkdirs();
        //saving file  
        try {
            FileOutputStream out = new FileOutputStream(new File(fileLocation));
            int read = 0;
            byte[] bytes = new byte[1024];
            out = new FileOutputStream(new File(fileLocation));
            while ((read = uploadedInputStream.read(bytes)) != -1) {
                out.write(bytes, 0, read);
            }
            out.flush();
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
//            String output = "File successfully uploaded to : " + fileLocation;  
        return newname;
 
    }
    protected String getSaltString() {
        String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-_";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();
        while (salt.length() < 49) { // length of the random string.
            int index = (int) (rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }
        String saltStr = salt.toString();
        return saltStr;

    }
}
