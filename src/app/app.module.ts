import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JavatestComponent } from './javatest/javatest.component';
import { HtmltestComponent } from './htmltest/htmltest.component';
import { JavatestdisplayComponent } from './javatestdisplay/javatestdisplay.component';
import { AfteradminloginComponent } from './afteradminlogin/afteradminlogin.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { QuestionbankComponent } from './questionbank/questionbank.component';
import { NgxPasswordToggleModule } from 'src/module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentloginComponent,
    StudentregistrationComponent,
    AdminloginComponent,
    JavatestComponent,
    HtmltestComponent,
    JavatestdisplayComponent,
    AfteradminloginComponent,
    AddquestionComponent,
    ForgetpasswordComponent,
    ListstudentComponent,
    EnrollmentComponent,
    QuestionbankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule,NgxPasswordToggleModule,CommonModule,ɵInternalFormsSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
