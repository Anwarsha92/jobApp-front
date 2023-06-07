import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb:FormBuilder,private ds:DataService,private route:Router) { }

  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    mob: ['', [Validators.required, Validators.pattern('[0-9]+'),Validators.minLength(10)]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  }
  )

  register(){
    var uname=this.registerForm.value.uname

    var mob=this.registerForm.value.mob

    var psw=this.registerForm.value.psw

    if(this.registerForm.valid){
      this.ds.register(uname,mob,psw).subscribe((result:any)=>{
        alert(result.message)
        this.route.navigateByUrl("")
      },result=>{
        alert(result.error.message)
        this.route.navigateByUrl("")

      })
    }
    else{
      alert('not valid')
    }
  }

}
