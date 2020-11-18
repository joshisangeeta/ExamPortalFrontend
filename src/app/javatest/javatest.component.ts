import { Component, OnInit } from '@angular/core';

declare var name:any;
@Component({
  selector: 'app-javatest',
  templateUrl: './javatest.component.html',
  styleUrls: ['./javatest.component.css']
})
export class JavatestComponent implements OnInit {

  Router:any;

  ngOnInit(): void {

    new name();
  }

  title='app-js'

}
