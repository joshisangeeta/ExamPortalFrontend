import { Component, OnInit } from '@angular/core';
import { Student } from 'src/student';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {

  student:Student=new Student();
  addedStudent:Student=new Student();
  isAdd=false;
  
  constructor(private dataService:ExamService ) { }
 
ngOnInit(): void {
 }
studentRegistration()
{
  let studentReturned=this.dataService.addStudent(this.student).subscribe(student=>this.addedStudent=student);
  if(studentReturned!=null)
  alert('you have registered successfully');
  this.isAdd=true;
 }

}
