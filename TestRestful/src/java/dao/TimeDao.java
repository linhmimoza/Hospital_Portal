/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import DBUtils.DBUtils;
import Function.TimeEditor;
import Models.Time;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Date;
import java.util.Calendar;

/**
 *
 * @author Tung
 */
public class TimeDao {

    private PreparedStatement stm;
    private Connection con;
    private ResultSet rs;

    private void closeConnection() {
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
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<Time> getListTimeAvailable() throws SQLException, ClassNotFoundException, ParseException {
        List<Time> listTime = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                DateFormat inputFormat = new SimpleDateFormat("yyyy/MM/dd");
                TimeEditor time = new TimeEditor();
                String now = time.getDate();
                Date dateparse = inputFormat.parse(now);
                SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd");
                String outputText = outputFormat.format(dateparse);
                String sql = "Select TimeId, Date, Limit, Amount, Available from Time where Available=1 and Date>='" + outputText + "'";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("TimeId");
                    int available = rs.getInt("Available");
                    String date = rs.getString("Date");
                    int limit = rs.getInt("Limit");
                    int amount = Integer.parseInt(rs.getString("Amount"));
                    Time t = new Time(id, amount, available, date, limit);
                    listTime.add(t);
                }
            }
        } finally {
            closeConnection();
        }
        return listTime;
    }
    
    public List<Time> getFirstAndLastDate() throws SQLException, ClassNotFoundException, ParseException {
        List<Time> listTime = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                DateFormat inputFormat = new SimpleDateFormat("yyyy/MM/dd");
                TimeEditor time = new TimeEditor();
                String now = time.getDate();
                Date dateparse = inputFormat.parse(now);
                SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd");
                String outputText = outputFormat.format(dateparse);
                String sql = "SELECT top 1 Date FROM Time\n"
                    + "order by Date desc";
                stm = con.prepareStatement(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    String lastdate = rs.getString("Date");
                    Time t = new Time(outputText, lastdate);
                    listTime.add(t);
                }
            }
        } finally {
            closeConnection();
        }
        return listTime;
    }

    public List<Time> getListTime(String date, int available) throws SQLException, ClassNotFoundException {
        List<Time> listTime = new ArrayList<>();
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select TimeId, Date, Limit, Amount, Available from Time where Date=? and Available=?";
                stm = con.prepareStatement(sql);
                stm.setString(1, date);
                stm.setInt(2, available);
                rs = stm.executeQuery();
                while (rs.next()) {
                    Integer id = rs.getInt("TimeId");
                    int limit = rs.getInt("Limit");
                    int amount = Integer.parseInt(rs.getString("Amount"));
                    Time t = new Time(id, amount, available, date, limit);
                    listTime.add(t);
                }
            }
        } finally {
            closeConnection();
        }
        return listTime;
    }
    
    public int checkDateAvailable(String date) throws SQLException, ClassNotFoundException {
        int id=-1;
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "Select * from Time where Date=? and Available=1";
                stm = con.prepareStatement(sql);
                stm.setString(1, date);
                rs = stm.executeQuery();
                if (rs.next()) {
                    id = rs.getInt("TimeId");
                }
            }
        }catch(Exception e){
            e.printStackTrace();
        }
        finally {
            closeConnection();
        }
        return id;
    }

    public boolean bookingSuccess(int timeId) {
        boolean check = false;
        try {
            String sql = "Update Time set Amount=Amount+1 where TimeId=?";
            con = DBUtils.makeConnection();
            stm = con.prepareStatement(sql);
            stm.setInt(1, timeId);
            check = stm.executeUpdate() > 0;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        return check;
    }

    public boolean checkAvailable() {
        boolean check = false;
        try {
            String sql = "Update Time set Available=0 where Amount>=Limit";
            con = DBUtils.makeConnection();
            stm = con.prepareStatement(sql);
            check = stm.executeUpdate() > 0;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        return check;
    }

    public boolean enableAvailable() {
        boolean check = false;
        try {
            String sql = "Update Time set Available=1 where Limit>=Amount";
            con = DBUtils.makeConnection();
            stm = con.prepareStatement(sql);
            check = stm.executeUpdate() > 0;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        return check;
    }

    public String updateLimitAmountTime(int Limit) {
        String result = "Success";
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                DateFormat inputFormat = new SimpleDateFormat("yyyy/MM/dd");
                TimeEditor time = new TimeEditor();
                String now = time.getDate();
                Date dateparse = inputFormat.parse(now);
                SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd");
                String outputText = outputFormat.format(dateparse);
                String sql = "update Time set Limit=" + Limit + ""
                        + "where Date >= '" + outputText + "'";
                stm = con.prepareStatement(sql);
                stm.executeUpdate();

            }
        } catch (Exception e) {
            e.printStackTrace();
            result = "Failed";
        } finally {
            closeConnection();
        }
        return result;
    }

    public String createDate(String dateto, int limit) throws SQLException, ParseException {
        String topdate = "";
        String result = "Success";
        try {
            con = DBUtils.makeConnection();
            String sql = "SELECT top 1 Date FROM Time\n"
                    + "order by Date desc";
            stm = con.prepareStatement(sql);
            rs = stm.executeQuery();
            if (rs.next()) {
                topdate = rs.getString("Date");
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                int success = 1;
                DateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd");
                Date date = inputFormat.parse(topdate);
                while (success == 1) {
                    Calendar c = Calendar.getInstance();
                    c.setTime(date);
                    c.add(Calendar.DATE, 1);
                    date = c.getTime();
                    SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd");
                    String outputText = outputFormat.format(date);
                    String sql = "IF '"+ outputText +"'<='"+ dateto +"'\n"
                            + "Begin\n"
                            + "Insert into [Time]([Date],Amount,Available,Limit)\n"
                            + "values('"+ outputText +"',0,1,"+ limit +")\n"
                            + "End";
                    stm = con.prepareStatement(sql);
                    success = stm.executeUpdate();
                }

            }
        } catch (Exception e) {
            e.printStackTrace();
            result = "Failed";
        } finally {
            closeConnection();
        }

        return result;
    }

    public boolean isDayExited(String Date) {
        boolean result = false;
        try {
            con = DBUtils.makeConnection();
            if (con != null) {
                String sql = "select TimeId from Time where  Date='" + Date + "'";
                stm = con.prepareStatement(sql);
                System.out.println(sql);
                rs = stm.executeQuery();
                while (rs.next()) {
                    result = true;
                }
            }
        } catch (ClassNotFoundException | SQLException ex) {
            ex.printStackTrace();

        } finally {
            closeConnection();
        }
        return result;
    }
}
