import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'src/app/class/AppConfig';
import { map } from 'rxjs';
import { EditEmployeePage } from 'src/app/edit-employee/edit-employee.page';

@Injectable({
  providedIn: 'root'
})
export class ViewEmployeeService {

  constructor(public http:HttpClient) { }
  // httpheader is a class
 

  public appconfig=new AppConfig();


//View Employee
  public ViewEmployee()
    {
    let headers=new HttpHeaders();
      headers.append("Accept",'application/json');
      headers.append('content-type','application/json');
     let option={headers:headers};
      return this.http.get(this.appconfig.url+"/Users",option).pipe(map(res=>res));

    }

    public DeleteEmployee(itm:any)
    {
      let headers=new HttpHeaders();
      headers.append("Accept",'application/json');
      headers.append('content-type','application/json');
      let option={headers:headers};
      return this.http.get(this.appconfig.url+"/Users?delid="+itm,option).pipe(map(res=>res));
    

    }
  
}
