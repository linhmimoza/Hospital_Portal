import { Injectable } from '@angular/core';
declare var $: any;
@Injectable()

export class NotificationService {

    constructor() { }

    success(message: string){
        $('body').append(`<div class="alert alert-success" id="notificationSuccess" style="
        position:fixed;
        top: 20px;
        right: 20px;
        z-index: 99999;
        "><strong>Success:</strong> ${message}</div>`);
        $('#notificationSuccess').slideToggle("slow");
        setTimeout(() => {
            // $('#notificationSuccess').fadeOut(500);
            $('#notificationSuccess').remove();
        }, 5000);
    }
}

