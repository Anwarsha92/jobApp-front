import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {

  applicationArray:any
  
  constructor(private ds: DataService, private fb: FormBuilder) { 

    this.ds.application().subscribe((result:any)=>{
      this.applicationArray=result.application
      // console.log(this.applicationArray);
      
    })
  }

  accept(mob:any){

    // console.log(mob.value);
    var mob=mob.value

    this.ds.accept(mob).subscribe((result:any)=>{
      alert(result.message)
    })
    
  }


  reject(mob:any){

    // console.log(mob.value);
    var mob=mob.value

    this.ds.reject(mob).subscribe((result:any)=>{
      alert(result.message)
    })
    
  }
  

}
