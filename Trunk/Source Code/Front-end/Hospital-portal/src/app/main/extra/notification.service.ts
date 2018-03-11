import { Injectable } from '@angular/core';
declare var $: any;
@Injectable()

export class NotificationService {

    constructor() { }

    success(message: string){
        return new Promise(resolve=>{
            $('body').append(`<div class="alert alert-success" id="notificationSuccess" style="
            position:fixed;
            bottom: 20px;
            right: 20px;
            z-index: 99999;
            "><strong>Success:</strong> ${message}</div>`);
            $('#notificationSuccess').fadeIn(1000);
            setTimeout(() => {
                $('#notificationSuccess').fadeOut(1000);
                setTimeout(() => {
                    resolve();
                }, 1000);
            }, 5000);
        });
        
    }

    fail(msg: string){

    }
}
