import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
declare var $: any;
@Injectable()

export class NotificationService {

    constructor() { }

    success(message: string) {
        return new Promise(resolve => {
            // $('body').append(`<div class="alert alert-success" id="notificationSuccess" style="
            // position:fixed;
            // bottom: 20px;
            // right: 20px;
            // z-index: 99999;
            // "><strong>Success:</strong> ${message}</div>`);
            // $('#notificationSuccess').fadeIn(1000);
            // setTimeout(() => {
            //     $('#notificationSuccess').fadeOut(1000);
            //     setTimeout(() => {
            //         resolve();
            //     }, 1000);
            // }, 1000);

            swal({
                position: 'bottom-end',
                type: 'success',
                title: message,
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                resolve();
            });

        });

    }

    fail(msg: string) {
        return new Promise(resolve => {
            $('body').append(`<div class="alert alert-danger" id="notificationFail" style="
            position:fixed;
            bottom: 20px;
            right: 20px;
            z-index: 99999;
            "><strong>Fail:</strong> ${msg}</div>`);
            $('#notificationFail').fadeIn(1000);
            setTimeout(() => {
                $('#notificationFail').fadeOut(1000);
                setTimeout(() => {
                    resolve();
                }, 1000);
            }, 1000);
        });
    }
}
