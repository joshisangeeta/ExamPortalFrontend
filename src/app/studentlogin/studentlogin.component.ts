import { Component, OnInit } from '@angular/core';
import { Student } from 'src/student';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

  student=new Student();
  islogin=false;
  
  constructor(private dataService:ExamService ) { }
 
ngOnInit(): void {
 }
 loginStudent(){
   this.dataService.loginStudent(this.student).subscribe( student => {alert("You have loggedin successfully"); this.islogin=true;},error=>alert("Invalid UserName or Password"));
  
 }
}
