import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutes } from "./app.routing";
import { CommonLayoutComponent } from './_ui/common-layout/common-layout.component';
import { CommonHeaderComponent } from './_ui/common-header/common-header.component';
import { CommonFooterComponent } from './_ui/common-footer/common-footer.component';
import { AuthLayoutComponent } from './_ui/auth-layout/auth-layout.component';
import { ReactiveFormsModule } from '@angular/forms';


import { ModalModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    CommonLayoutComponent,
    CommonHeaderComponent,
    CommonFooterComponent,
    AuthLayoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes,{useHash:true}),
    ReactiveFormsModule,
    ModalModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
