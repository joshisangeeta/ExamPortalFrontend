import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AfteradminloginComponent } from './afteradminlogin/afteradminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HtmltestComponent } from './htmltest/htmltest.component';
import { JavatestComponent } from './javatest/javatest.component';
import { JavatestdisplayComponent } from './javatestdisplay/javatestdisplay.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { QuestionbankComponent } from './questionbank/questionbank.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';

const routes: Routes = [{path:"",redirectTo:"/dashboard",pathMatch:"full"},
                        {path:"dashboard",component:DashboardComponent},
                        {path:"studentlogin",component:StudentloginComponent},
                        {path:"studentregistration",component:StudentregistrationComponent},
                        {path:"adminlogin",component:AdminloginComponent},
                        {path:"javatest",component:JavatestComponent},
                        {path:"htmltest",component:HtmltestComponent},
                        {path:"javatestdisplay",component:JavatestdisplayComponent},
                        {path:"addquestion",component:AddquestionComponent},
                        {path:"afteradminlogin",component:AfteradminloginComponent},
                        {path:"forgetpassword",component:ForgetpasswordComponent},
                        {path:"liststudent",component:ListstudentComponent},
                        {path:"enrollment",component:EnrollmentComponent},
                        {path:"questionbank",component:QuestionbankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
