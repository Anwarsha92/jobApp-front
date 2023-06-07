import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private fb: FormBuilder,private ds:DataService,private route:Router) { }




  ngOnInit(): void{                 //for back page not work after logout

    if(localStorage.getItem("currentMob")){
      this.route.navigateByUrl("dashboard")
    }
    if(localStorage.getItem("currentAdmin")){
      this.route.navigateByUrl("admindashboard")
    }

  }

  loginForm = this.fb.group({
    mob: ["", [Validators.required, Validators.pattern('[0-9]+'),Validators.minLength(10)]],
    psw: ["", [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  }
  )

  login(){
    var mob=this.loginForm.value.mob

    var psw=this.loginForm.value.psw

    if(this.loginForm.valid){
      this.ds.login(mob,psw).subscribe((result:any)=>{

        localStorage.setItem("currentMob",result.currentMob)
        localStorage.setItem("currentUser",result.currentUser)
        localStorage.setItem("token",JSON.stringify(result.token))


        alert(result.message)
        this.route.navigateByUrl("dashboard")
      },result=>{
        alert(result.error.message)

      })
      
    }
    else{
      alert('not valid')
    }
  }


}
