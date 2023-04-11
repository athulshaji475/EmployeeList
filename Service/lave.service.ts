import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule ,HttpHeaders} from '@angular/common/http';
import { AppConfig } from 'src/app/class/AppConfig';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LaveService {
public appconfig=new AppConfig()
  constructor(public http:HttpClient) { }

SetLeave(data:any)
{
  var headers=new HttpHeaders()
  headers.append("Accept",'application/json');
  headers.append('content-type','application/json');
  let option={headers:headers}
return this.http.post(this.appconfig.url+'/Leave',data,option)
}

GetIndividualReport(uname:any)
{
  console.log(uname+"from service");
  var headers=new HttpHeaders()
  headers.append("Accept",'application/json');
  headers.append('content-type','application/json');
  let option={headers:headers};
  return this.http.get(this.appconfig.url+'/Leave?str='+uname,option).pipe(map(res=>res));

}

getReportFoAdmin()
{
  let headers=new HttpHeaders();
  headers.append("Accept",'application/json');
  headers.append('content-type','application/json');
  let option={headers:headers};
  return this.http.get(this.appconfig.url+'/Leave',option).pipe(map(res=>res));


}

ApproveLeave(uname:any,date:any)
{
let headers= new HttpHeaders
headers.append("Accept",'application/json');
headers.append('content-type','application/json');
//const url = `${this.appconfig.url}/LeavApproving?uname=${uname}&date=${date}`;
let option={headers:headers};
return this.http.post(this.appconfig.url+'/LeavApproving?uname='+uname+'&date='+date,option).pipe(map(res=>res));
}


RejectLEave(uname:String,date:String,comment:String)
{
  console.log(uname)
  let headers=new HttpHeaders
  headers.append("Accept",'application/json');
  headers.append('content-type','application/json');
  let  option={headers:headers};
 return this.http.post(this.appconfig.url+'/RejectLeave?uname='+uname+'&date='+date+'&comm='+comment,option).pipe(map(res=>res));


}
}
