import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  data=localStorage.getItem("currentUser")

  mob:any

  constructor(private ds: DataService, private fb: FormBuilder,private router:Router) { }



  ngOnInit(): void{                 //for back page not work after logout

    if(!localStorage.getItem("currentMob")){
      alert('Please login')
      this.router.navigateByUrl("")
    }

  }

  submitForm1 = this.fb.group(
    {
      cname1: ["", [Validators.required, Validators.pattern('[A-Z]+')]],
      qual1: ["", []],
      mobi1: ["", [Validators.required, Validators.pattern('[0-9]+'), Validators.min(10)]],
      mail1: ["", [Validators.required, Validators.email]],
      expe1: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      appfor1: ["", []],
    }
  )


  submit1() {

    var cname1 = this.submitForm1.value.cname1
    var qual1 = this.submitForm1.value.qual1
    var mobi1 = this.submitForm1.value.mobi1
    var mail1 = this.submitForm1.value.mail1
    var expe1 = this.submitForm1.value.expe1
    var appfor1 = this.submitForm1.value.appfor1


    if (this.submitForm1.valid) {
      this.ds.submit(cname1, qual1, mobi1, mail1, expe1, appfor1).subscribe((result: any) => {
        alert(result.message)
      }, result => {
        alert(result.error.message)
      })
    }
    else {
      alert('not valid')
    }

  }




  // 2nd


  submitForm2 = this.fb.group(
    {
      cname2: ["", [Validators.required, Validators.pattern('[A-Z]+')]],
      qual2: ["", []],
      mobi2: ["", [Validators.required, Validators.pattern('[0-9]+'), Validators.min(10)]],
      mail2: ["", [Validators.required, Validators.email]],
      expe2: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      appfor2: ["", []],
    }
  )


  submit2() {

    var cname2 = this.submitForm2.value.cname2
    var qual2 = this.submitForm2.value.qual2
    var mobi2 = this.submitForm2.value.mobi2
    var mail2 = this.submitForm2.value.mail2
    var expe2 = this.submitForm2.value.expe2
    var appfor2 = this.submitForm2.value.appfor2


    if (this.submitForm2.valid) {
      this.ds.submit(cname2, qual2, mobi2, mail2, expe2, appfor2).subscribe((result: any) => {
        alert(result.message)
      }, result => {
        alert(result.error.message)
      })
    }
    else {
      alert('not valid')
    }

  }



  // 3rd

  submitForm3 = this.fb.group(
    {
      cname3: ["", [Validators.required, Validators.pattern('[A-Z]+')]],
      qual3: ["", []],
      mobi3: ["", [Validators.required, Validators.pattern('[0-9]+'), Validators.min(10)]],
      mail3: ["", [Validators.required, Validators.email]],
      expe3: ["", [Validators.required, Validators.pattern('[0-9]+')]],
      appfor3: ["", []],
    }
  )


  submit3() {

    var cname3 = this.submitForm3.value.cname3
    var qual3 = this.submitForm3.value.qual3
    var mobi3 = this.submitForm3.value.mobi3
    var mail3 = this.submitForm3.value.mail3
    var expe3 = this.submitForm3.value.expe3
    var appfor3 = this.submitForm3.value.appfor3


    if (this.submitForm3.valid) {
      this.ds.submit(cname3, qual3, mobi3, mail3, expe3, appfor3).subscribe((result: any) => {
        alert(result.message)
      }, result => {
        alert(result.error.message)
      })
    }
    else {
      alert('not valid')
    }

  }

  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentMob")
    this.router.navigateByUrl("")
  }



  deleteAcc(){
    this.mob=localStorage.getItem("currentMob")  
  }

  cancelChild(){
    this.mob=""
  }

  delAcc(event:any){

    // console.log(event);
    
      this.ds.delAcc(event).subscribe((result:any)=>{
        alert(result.message)
        this.logout()
      })
  }

}
