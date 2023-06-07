import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-adminpannel',
  templateUrl: './adminpannel.component.html',
  styleUrls: ['./adminpannel.component.css']
})
export class AdminpannelComponent {

  constructor(private fb: FormBuilder,private ds:DataService,private route:Router) { }


  ngOnInit(): void{                 //for back page not work after logout

    if(localStorage.getItem("currentAdmin")){
      this.route.navigateByUrl("admindashboard")
    }

  }


  adloginForm = this.fb.group({
    uname: ["", [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    psw: ["", [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  }
  )

  adlogin(){
    var uname=this.adloginForm.value.uname

    var psw=this.adloginForm.value.psw

    if(this.adloginForm.valid){
      this.ds.adlogin(uname,psw).subscribe((result:any)=>{


        localStorage.setItem("currentAdmin",result.currentAdmin)

        alert(result.message)

        this.route.navigateByUrl("admindashboard")
      },result=>{
        alert(result.error.message)
      })
    }
    else{
      alert("Form not valid")
    }
  }
}

