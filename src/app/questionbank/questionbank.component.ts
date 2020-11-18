import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { Question } from '../question';

@Component({
  selector: 'app-questionbank',
  templateUrl: './questionbank.component.html',
  styleUrls: ['./questionbank.component.css']
})
export class QuestionbankComponent implements OnInit {
  questions:Question[]
  qid:number;
  constructor(private dataService:ExamService) { }

  ngOnInit(): void {

    this.dataService.viewQuestionBank().subscribe(questions=>this.questions=questions);
  }

  deleteQuestion(qid:number){
    alert("press ok to confirm");
    this.dataService.deleteQuestions(qid).subscribe(questions=>this.questions=questions);
  }

}
