import { Component, OnInit } from '@angular/core';
import { Student } from 'src/student';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {
  student:Student[];
  constructor(private dataService:ExamService) { }

  ngOnInit(): void {

    this.dataService.getAllStudents().subscribe(student=>this.student=student);
  }



}
