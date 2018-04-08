import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class NotiService {

    constructor() { }

    public success(message: string): void {
        $('body').append(`<div class="alert alert-success" id="notificationSuccess" style="
            position:fixed;
            bottom: 20px;
            right: 20px;
            z-index: 99999;
            "><strong>Success:</strong> ${message}</div>`);
        $('#notificationSuccess').fadeIn(1000);
        setTimeout(() => {
            $('#notificationSuccess').remove();
        }, 3000);

    }

    public fail(msg: string): void {
        $('body').append(`<div class="alert alert-danger" id="notificationFail" style="
            position:fixed;
            bottom: 20px;
            right: 20px;
            z-index: 99999;
            "><strong>Fail:</strong> ${msg}</div>`);
        $('#notificationFail').fadeIn(1000);
        setTimeout(() => {
            $('#notificationFail').remove();
        }, 3000);
    }
}
