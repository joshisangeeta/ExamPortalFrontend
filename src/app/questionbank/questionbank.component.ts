import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { Question } from '../question';

@Component({
  selector: 'app-questionbank',
  templateUrl: './questionbank.component.html',
  styleUrls: ['./questionbank.component.css']
})
export class QuestionbankComponent implements OnInit {
  question:Question[]
  constructor(private dataService:ExamService) { }

  ngOnInit(): void {

    this.dataService.viewQuestionBank().subscribe(question=>this.question=question);
  }

}
