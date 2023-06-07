import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



const option={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }




  getToken(){
    const token=JSON.parse(localStorage.getItem("token") || "")

    let headers=new HttpHeaders
    if(token){
      option.headers=headers.append('token',token)
    }
    return option
   }



  register(uname:any,mob:any,psw:any){
    
    const data={uname,mob,psw}

    return this.http.post('http://localhost:3000/register',data)
  }

  login(mob:any,psw:any){
    const data={mob,psw}

    return this.http.post('http://localhost:3000/login',data)
  }

  submit(cname:any,quali:any,mob:any,email:any,expe:any,appfor:any){
    const data={cname,quali,mob,email,expe,appfor}

    return this.http.post('http://localhost:3000/submit',data)
  }


  adlogin(uname:any,psw:any){
    const data={uname,psw}

    return this.http.post('http://localhost:3000/adlogin',data)
  }


  application(){
    return this.http.get('http://localhost:3000/getApplications')
  }


  accept(mob:any){
    const data={mob}

    return this.http.post('http://localhost:3000/accept',data)
  }


  reject(mob:any){
    const data={mob}

    return this.http.post('http://localhost:3000/reject',data)
  }

  notification(mob:any){
    const data={mob}

    return this.http.post('http://localhost:3000/notification',data)
  }

  delAcc(mob:any){

    return this.http.delete('http://localhost:3000/delete/'+mob,this.getToken())
  }
}
