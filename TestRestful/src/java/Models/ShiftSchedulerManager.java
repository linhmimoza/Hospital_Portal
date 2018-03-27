/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Models;

/**
 *
 * @author Admin
 */
public class ShiftSchedulerManager {
    private String week;
    private int departmentId;
    private int waiting;
    private int checked;

    public ShiftSchedulerManager(String week, int departmentId, int waiting, int checked) {
        this.week = week;
        this.departmentId = departmentId;
        this.waiting = waiting;
        this.checked = checked;
    }

    public ShiftSchedulerManager() {
    }

    public String getWeek() {
        return week;
    }

    public void setWeek(String week) {
        this.week = week;
    }

    public int getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(int departmentId) {
        this.departmentId = departmentId;
    }

    public int getWaiting() {
        return waiting;
    }

    public void setWaiting(int waiting) {
        this.waiting = waiting;
    }

    public int getChecked() {
        return checked;
    }

    public void setChecked(int checked) {
        this.checked = checked;
    }
    
}
