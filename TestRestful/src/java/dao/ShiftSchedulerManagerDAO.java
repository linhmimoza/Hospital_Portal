/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import Models.ShiftSchedulerManager;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Admin
 */
public class ShiftSchedulerManagerDAO {
    Connection con = null;
    PreparedStatement stm = null;
    ResultSet rs = null;

    public void closeConnection() {

        try {
            if (rs != null) {
                rs.close();
            }
            if (stm != null) {
                stm.close();
            }
            if (con != null) {
                con.close();
            }
        } catch (SQLException ex) {
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        }

    }
     public List<ShiftSchedulerManager> getListShiftSchedulerManager()  {
   

        List<ShiftSchedulerManager> list = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "select Week,DepartmentId,Waiting,Checked from ShiftSchedulerManager";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    int depId=rs.getInt("DepartmentId");
                    String week = rs.getString("Week");
                    int waiting=rs.getInt("Waiting");
                    int checked=rs.getInt("Checked");
                   ShiftSchedulerManager manager=new ShiftSchedulerManager(week, depId, waiting, checked);
                    list.add(manager);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
         Logger.getLogger(ShiftScheduleDAO.class.getName()).log(Level.SEVERE, null, ex);
     } finally {
      closeConnection();
        }
        return list;
    }
   
     public ShiftSchedulerManager getShiftSchedulerManager(String week, int depId)  {
   

        ShiftSchedulerManager manager= new ShiftSchedulerManager();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "select Week,DepartmentId,Waiting,Checked from ShiftSchedulerManager "
                        + "where Week='"+week+"' and DepartmentId="+depId;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                if (rs.next()) {
                     depId=rs.getInt("DepartmentId");
                    week = rs.getString("Week");
                    int waiting=rs.getInt("Waiting");
                    int checked=rs.getInt("Checked");
                    manager=new ShiftSchedulerManager(week, depId, waiting, checked);
 
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
         Logger.getLogger(ShiftScheduleDAO.class.getName()).log(Level.SEVERE, null, ex);
     } finally {
      closeConnection();
        }
        return manager;
    }
     public void createShiftSchedulerManager(String week,int depId, int waiting){
      

        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
            
             String sql = "select Week,DepartmentId,Waiting,Checked from ShiftSchedulerManager "
                        + "where Week='"+week+"' and DepartmentId="+depId;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                if (rs.next()) {
                 sql = "update ShiftSchedulerManager set   Waiting="+waiting+" where"
                         + " Week='"+week+"'and DepartmentId="+depId;
                stm = con.prepareStatement(sql);          
                stm.executeUpdate();   
                } else{
                    sql = "insert ShiftSchedulerManager(Week,DepartmentId,Waiting,Checked) values('"+week+"',"+depId+""
                            + ","+waiting+",0)";
                stm = con.prepareStatement(sql);  
                  
                stm.executeUpdate();
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);

        } finally {
            closeConnection();
        }

    }  
     public String checkShiftSchedulerManager(ShiftSchedulerManager manager){
      String result="Success";

        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
            
             String sql = "select Week,DepartmentId,Waiting,Checked from ShiftSchedulerManager "
                        + "where Week='"+manager.getWeek()+"' and DepartmentId="+manager.getDepartmentId();
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                if (rs.next()) {
                 sql = "update ShiftSchedulerManager set Waiting="+manager.getWaiting()+",  Checked="+manager.getChecked()+" where"
                         + " Week='"+manager.getWeek()+"'and DepartmentId="+manager.getDepartmentId();
                stm = con.prepareStatement(sql);          
                stm.executeUpdate();   
                } else{
                    sql = "insert ShiftSchedulerManager(Week,DepartmentId,Waiting,Checked) values('"+manager.getWeek()+"',"
                            + ""+manager.getDepartmentId()+""
                            + ","+manager.getWaiting()+","+manager.getChecked()+")";
                stm = con.prepareStatement(sql);  
                  
                stm.executeUpdate();
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DepartmentDAO.class.getName()).log(Level.SEVERE, null, ex);
            result="Failed";

        } finally {
            closeConnection();
        }
return result;
    }  
       public List<ShiftSchedulerManager> getListShiftSchedulerManagerByDepId(int depId)  {
        List<ShiftSchedulerManager> list = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "select Week,DepartmentId,Waiting,Checked from ShiftSchedulerManager where DepartmentId="+depId;
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                     depId=rs.getInt("DepartmentId");
                    String week = rs.getString("Week");
                    int waiting=rs.getInt("Waiting");
                    int checked=rs.getInt("Checked");
                   ShiftSchedulerManager manager=new ShiftSchedulerManager(week, depId, waiting, checked);
                    list.add(manager);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
         Logger.getLogger(ShiftScheduleDAO.class.getName()).log(Level.SEVERE, null, ex);
     } finally {
      closeConnection();
        }
        return list;
    }
   public List<ShiftSchedulerManager> getFutureListManagerByDepId(int depId, String w)  {
        List<ShiftSchedulerManager> list = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "select Week,DepartmentId,Waiting,Checked from ShiftSchedulerManager where"
                        + " DepartmentId="+depId+" and\n" +
" Week>='"+w+"' ORDER BY Week";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                     depId=rs.getInt("DepartmentId");
                    String week = rs.getString("Week");
                    int waiting=rs.getInt("Waiting");
                    int checked=rs.getInt("Checked");
                   ShiftSchedulerManager manager=new ShiftSchedulerManager(week, depId, waiting, checked);
                    list.add(manager);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
         Logger.getLogger(ShiftScheduleDAO.class.getName()).log(Level.SEVERE, null, ex);
     } finally {
      closeConnection();
        }
        return list;
    }
   public List<ShiftSchedulerManager> getPassListManagerByDepId(int depId, String w)  {
        List<ShiftSchedulerManager> list = new ArrayList<>();
        try {
            con = DBUtils.DBUtils.makeConnection();
            if (con != null) {
                String sql = "select Week,DepartmentId,Waiting,Checked from ShiftSchedulerManager where"
                        + " DepartmentId="+depId+" and\n" +
" Week<'"+w+"' ORDER BY Week DESC";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                     depId=rs.getInt("DepartmentId");
                    String week = rs.getString("Week");
                    int waiting=rs.getInt("Waiting");
                    int checked=rs.getInt("Checked");
                   ShiftSchedulerManager manager=new ShiftSchedulerManager(week, depId, waiting, checked);
                    list.add(manager);
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
         Logger.getLogger(ShiftScheduleDAO.class.getName()).log(Level.SEVERE, null, ex);
     } finally {
      closeConnection();
        }
        return list;
    }
}
