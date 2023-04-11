import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/app/class/employee';
import { map } from 'rxjs';
import { AppConfig } from 'src/app/class/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class EditdataService {
user=new Users
appconfig=new AppConfig
  constructor(public http:HttpClient) { }

  public setdata(item:any)
  {
     this.user=item
    
  }
  public getdata()
{
  return this.user
}

public ViewEmployee2()
    {
    let headers=new HttpHeaders();
      headers.append("Accept",'application/json');
      headers.append('content-type','application/json');
     let option={headers:headers};
      return this.http.get(this.appconfig.url+"/Users",option).pipe(map(res=>res));

    }

  public  Update_User(Id:any)
  {
    console.log(Id);
    let headers=new HttpHeaders()
    headers.append("Accept",'application/json');
    headers.append('content-type','application/json');
   let option={headers:headers};
   
    return this.http.post(this.appconfig.url+"/Edits",Id,option).pipe(map(res=>res));

  }
  
}
