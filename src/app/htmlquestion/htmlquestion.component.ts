import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { HtmlQuestion } from '../htmlquestion';

@Component({
  selector: 'app-htmlquestion',
  templateUrl: './htmlquestion.component.html',
  styleUrls: ['./htmlquestion.component.css']
})
export class HtmlquestionComponent implements OnInit {

  htmlquestions:HtmlQuestion[]
  qid:number;
  constructor(private dataService:ExamService) { }

  ngOnInit(): void {

    this.dataService.viewHQuestionBank().subscribe(htmlquestions=>this.htmlquestions=htmlquestions);
  }

  deleteHQuestion(qid:number){
    alert("press ok to confirm");
    this.dataService.deleteHQuestions(qid).subscribe(htmlquestions=>this.htmlquestions=htmlquestions);
  }

}
