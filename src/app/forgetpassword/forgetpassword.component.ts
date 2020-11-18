import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  
 // private router:Router
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigateByUrl['/dashboard']
  }
}


