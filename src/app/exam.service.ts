import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Student } from 'src/student';
import { Observable } from 'rxjs';
import { Admin } from 'src/admin';
import { Question } from './question';
import { HtmlQuestion } from './htmlquestion';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  url="http://localhost:8085/web"
  constructor(private http:HttpClient) { }
  
  
  addStudent(student:Student):Observable<any>{
  return this.http.post(this.url.concat('/adduser/'),student);
   }

   public loginStudent(student:Student):Observable<any>{
     return this.http.post<any>(this.url.concat('/loginuser'),student);
   }
   public loginAdmin(admin:Admin):Observable<any>{
    return this.http.post<any>(this.url.concat('/loginadmin'),admin);
   }
   getAllStudents():Observable<any>{

    return this.http.get(this.url.concat('/viewstudents'));
   }

   addQuestion(question:Question):Observable<any>{
     return this.http.post(this.url.concat('/addquestion/'),question);
   }

   viewQuestionBank():Observable<any>{
     return this.http.get(this.url.concat('/viewallquestion'))
   }

   deleteQuestions(qid:number):Observable<any>{
    let appendUrl = this.url.concat('/deletequestion/afterdelete/')+qid+'';
    return this.http.get(appendUrl);
  }

  deleteHQuestions(qid:number):Observable<any>{
    let appendUrl = this.url.concat('/deletehquestion/afterhdelete/')+qid+'';
    return this.http.get(appendUrl);
  }

  viewHQuestionBank():Observable<any>{
    return this.http.get(this.url.concat('/viewallhquestion'))
  }

  addHQuestion(htmlquestion:HtmlQuestion):Observable<any>{
    return this.http.post(this.url.concat('/addhquestion/'),htmlquestion);
  }

   
}


