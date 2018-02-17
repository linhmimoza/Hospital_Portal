import { Component } from '@angular/core';
class User{
    username:string;
    password:string;
}
@Component({
    selector: 'dashboard',
    templateUrl:'./dashboard.component.html'
})
export class DashboardComponent {
    input1:string;
    user = new User;
    // input1Label:string;
    // input1Model:string;
    input2Label:string;
    input2Model:string;
    constructor(){
        // this.user = new User();
        // this.user.username = "Admin";
        // this.user.password = "123456";
        // this.input1="This is input value";
        // this.input1Label="Label 1";
        // this.input1Model="Model 1";
        // this.input2Label="Label 2";
        // this.input2Model="Model 2";
    }
    ngOnInit(){
        setTimeout(()=>{
            this.input1="Test Hello";
        },5000);
    }
    ngAfterViewInit(){

    }
    ngOnDestroy(){

    }

    onClick(){
        // alert("Model1: " + this.input1Model + "Label1: " + this.input1Label);
        // alert("Model2: " + this.input2Model + "Label2: " + this.input2Label);
        alert(this.user.username);
        alert(this.user.password);
    }
}