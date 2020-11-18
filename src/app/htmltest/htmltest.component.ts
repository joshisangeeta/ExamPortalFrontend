import { Component, OnInit } from '@angular/core';
    
declare var namehtml: any;

@Component({
  selector: 'app-htmltest',
  templateUrl: './htmltest.component.html',
  styleUrls: ['./htmltest.component.css']
})
export class HtmltestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    new namehtml();
  }

  title='app-js'
}
