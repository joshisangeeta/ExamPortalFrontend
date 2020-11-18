import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { Question } from '../question';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  question:Question=new Question();
  addedQuestion:Question=new Question();
  isAdd=false;
  constructor(private dataService:ExamService) { }

  ngOnInit(): void {
  }

  addQuestion(){
    let questionReturned=this.dataService.addQuestion(this.question).subscribe(question=>this.addedQuestion=question);
    if(questionReturned!=null)
    alert("Question added SuccessFully");
    this.isAdd=true;
  }
  
}
