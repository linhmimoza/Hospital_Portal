/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Models;

/**
 *
 * @author Tung
 */
public class Service {
    int serviceId,departmentId,status;
    String serviceName,description;

    public Service() {
    }

    

    public Service(int serviceId, int departmentId, String serviceName, String description) {
        this.serviceId = serviceId;
        this.departmentId = departmentId;
        this.serviceName = serviceName;
        this.description = description;
    }

    public Service(int serviceId, int departmentId, int status, String serviceName, String description) {
        this.serviceId = serviceId;
        this.departmentId = departmentId;
        this.status = status;
        this.serviceName = serviceName;
        this.description = description;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    

   
    

    

    public int getServiceId() {
        return serviceId;
    }

    public void setServiceId(int serviceId) {
        this.serviceId = serviceId;
    }

    public int getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(int departmentId) {
        this.departmentId = departmentId;
    }
    

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
}
