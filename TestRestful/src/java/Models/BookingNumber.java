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
public class BookingNumber {
    int bookingNumber,bookingId;

    public BookingNumber() {
    }

    public BookingNumber(int bookingId) {
        this.bookingId = bookingId;
    }
    

    public BookingNumber(int bookingNumber, int bookingId) {
        this.bookingNumber = bookingNumber;
        this.bookingId = bookingId;
    }

    public int getBookingNumber() {
        return bookingNumber;
    }

    public void setBookingNumber(int bookingNumber) {
        this.bookingNumber = bookingNumber;
    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }
    
}
