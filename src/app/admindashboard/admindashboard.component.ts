import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {

  data=localStorage.getItem("currentAdmin")


  constructor(private fb: FormBuilder,private ds:DataService,private router:Router) { }



  ngOnInit(): void{                 //for back page not work after logout

    if(!localStorage.getItem("currentAdmin")){
      alert('Please login')
      this.router.navigateByUrl("/adminpannel")
    }

  }


  logout(){
    
    localStorage.removeItem("currentAdmin")
    this.router.navigateByUrl("/adminpannel")
  }

}
