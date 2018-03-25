import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectservice',
  templateUrl: './selectservice.component.html',
  styleUrls: ['./selectservice.component.css']
})
export class SelectserviceComponent implements OnInit {

  list: any = [];

  options: any = [];

  date = null;

  availables : any =[];

  data = {
    SpecialistId:"",
    ServiceId:"",
    TimeId:"",
    CreateDate: "",
    GuestName:"",
    GuestPhone:"",
    GuestIdentity:"",
    GuestEmail:"",
    GuestAddress:"",
    Note:""
  };

  showdata(){
    console.log("your data",this.data);
  }

  constructor(private restClient : RestService) { }
  
  ngOnInit() {
    console.log("select working");
    this.restClient.getSpeciLlist().subscribe(res =>{
        console.log(res);
        this.list = res;
    });
  }
  onchange(id){
    this.restClient.getOptions(id).subscribe(res =>{
        console.log(res);
        this.options = res;
    });
    console.log(id);
  }
  datechange(){
    console.log(this.date);
    this.availables = [];
    this.restClient.getAvailable(this.date).subscribe(res => {
        this.availables = res;
        console.log("available: ", res);
    });
    
  }
  submitdata(){

  }
}
