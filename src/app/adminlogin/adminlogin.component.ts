import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/admin';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admin=new Admin();
  islogin=false;
  
  constructor(private dataService:ExamService ) { }
 
ngOnInit(): void {
 }
 loginAdmin(){
   this.dataService.loginAdmin(this.admin).subscribe( admin =>{alert("You have loggedin successfully");this.islogin=true;},error => alert("Invalid credentials"));
   
 }
}
