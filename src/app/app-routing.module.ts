import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddhtmlquestionComponent } from './addhtmlquestion/addhtmlquestion.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AddquestionlistComponent } from './addquestionlist/addquestionlist.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AfteradminloginComponent } from './afteradminlogin/afteradminlogin.component';
import { AfterstudentloginComponent } from './afterstudentlogin/afterstudentlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HtmlquestionComponent } from './htmlquestion/htmlquestion.component';
import { HtmltestComponent } from './htmltest/htmltest.component';
import { JavatestComponent } from './javatest/javatest.component';
import { JavatestdisplayComponent } from './javatestdisplay/javatestdisplay.component';
import { ListquestionbankComponent } from './listquestionbank/listquestionbank.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { QuestionbankComponent } from './questionbank/questionbank.component';
import { ScoreComponent } from './score/score.component';
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
                        {path:"questionbank",component:QuestionbankComponent},
                        {path:"listquestionbank",component:ListquestionbankComponent},
                        {path:"htmlquestion",component:HtmlquestionComponent},
                        {path:"addquestionlist",component:AddquestionlistComponent},
                        {path:"addhtmlquestion",component:AddhtmlquestionComponent},
                        {path:"score",component:ScoreComponent},
                        {path:"afterstudentlogin",component:AfterstudentloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
