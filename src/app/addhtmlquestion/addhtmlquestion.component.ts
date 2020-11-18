import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { HtmlQuestion } from '../htmlquestion';

@Component({
  selector: 'app-addhtmlquestion',
  templateUrl: './addhtmlquestion.component.html',
  styleUrls: ['./addhtmlquestion.component.css']
})
export class AddhtmlquestionComponent implements OnInit {

  htmlquestion:HtmlQuestion=new HtmlQuestion();
  addedQuestion:HtmlQuestion=new HtmlQuestion();
  isAdd=false;
  constructor(private dataService:ExamService) { }

  ngOnInit(): void {
  }

  addQuestions(){
    let questionReturned=this.dataService.addHQuestion(this.htmlquestion).subscribe(htmlquestion=>this.addedQuestion=htmlquestion);
    if(questionReturned!=null)
    alert("Question added SuccessFully");
    this.isAdd=true;
  }

}
