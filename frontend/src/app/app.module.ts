import { RestService } from './rest.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectserviceComponent } from './selectservice/selectservice.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectserviceComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
