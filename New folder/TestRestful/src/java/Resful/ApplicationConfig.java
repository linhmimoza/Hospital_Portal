/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resful;

import java.util.Set;
import javax.ws.rs.core.Application;

/**
 *
 * @author Admin
 */
@javax.ws.rs.ApplicationPath("webresources")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(Resful.CategoryResource.class);
        resources.add(Resful.DepartmentResource.class);
        resources.add(Resful.MeetingResource.class);
        resources.add(Resful.MissionResource.class);
        resources.add(Resful.NotificationResource.class);
        resources.add(Resful.RoleResource.class);
        resources.add(Resful.RoomResource.class);
        resources.add(Resful.ShiftSchedulerResource.class);
        resources.add(Resful.UserResource.class);
    }
    
}
