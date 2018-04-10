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
public class Time {
    int timeId,amount,available,limit;
    String date,firstdate,lastdate;

    public Time() {
    }

    public Time(int timeId, int amount, int available, String date, int limit) {
        this.timeId = timeId;
        this.amount = amount;
        this.available = available;
        this.date = date;
        this.limit = limit;
    }

    public Time(String firstdate, String lastdate) {
        this.firstdate = firstdate;
        this.lastdate = lastdate;
    }
    

    public String getFirstdate() {
        return firstdate;
    }

    public void setFirstdate(String firstdate) {
        this.firstdate = firstdate;
    }

    public String getLastdate() {
        return lastdate;
    }

    public void setLastdate(String lastdate) {
        this.lastdate = lastdate;
    }

    
    public int getTimeId() {
        return timeId;
    }

    public void setTimeId(int timeId) {
        this.timeId = timeId;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getAvailable() {
        return available;
    }

    public void setAvailable(int available) {
        this.available = available;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }
    

    
    
}
