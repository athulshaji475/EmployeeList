import { Injectable } from '@angular/core';
import {map} from"rxjs/operators";
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { AppConfig } from 'src/app/class/AppConfig';
import { Observable,of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  appconfig =new AppConfig() //object of app config

  constructor(public http:HttpClient) { }
  //Service function for Adduser to Api
 InsertUser(Id:any)
  {
    console.log(Id);
    let headers=new HttpHeaders()
    headers.append("Accept",'application/json');
    headers.append('content-type','application/json');
   let option={headers:headers};
   
    return this.http.post(this.appconfig.url+'/Users',Id,option).pipe(map(res=>res));

  }


  LoginService2(uname:String,Password:String):Observable<boolean>
  {
    if (uname=="athulshaji"&& Password=="athulunni12")
    {
       return of(true)
    
  }else
  {
    return of(false)
  }
  
  }

  LoginService(User:any)
  {
let headers= new HttpHeaders
headers.append("Accept",'application/json');
headers.append('content-type','application/json');
let url=this.appconfig.url+"/Users"
let option={headers:headers};
//let body={Username,Password};

return this.http.post(this.appconfig.url+'/Login',User,option).pipe(map(res=>res));


  }


}

