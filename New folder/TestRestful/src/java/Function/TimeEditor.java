/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Function;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

/**
 *
 * @author Admin
 */
public class TimeEditor {
     public String getTime(){
         DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
Calendar cal = Calendar.getInstance();
         return dateFormat.format(cal.getTime());
     }
      public String getDate(){
         DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
Calendar cal = Calendar.getInstance();
         return dateFormat.format(cal.getTime());
     }
}
