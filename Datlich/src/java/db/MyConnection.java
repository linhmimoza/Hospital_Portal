/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package db;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author Tung
 */
public class MyConnection {
    public static Connection getMyConnection(){
        try{
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            Connection conn=DriverManager.getConnection("jdbc:sqlserver://TUNGPXSE61590\\TUNGSQLSERVER:1433;"
                    + "databaseName=Hospital_Portal;"
                    + "username=sa;password=123456");
            return conn;
        }catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
