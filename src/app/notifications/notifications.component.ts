import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {


  data:any
  constructor(private ds: DataService, private fb: FormBuilder,private router:Router) { 

    this.ds.notification(localStorage.getItem("currentMob")).subscribe((result:any)=>{
      this.data=result.message
    })
  }
  ngOnInit(): void{                 //for back page not work after logout

    if(!localStorage.getItem("currentMob")){
      alert('Please login')
      this.router.navigateByUrl("")
    }

  }

}
