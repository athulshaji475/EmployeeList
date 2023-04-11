import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Users } from '../class/employee';
import { UsersService } from 'Service/users.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.page.html',
  styleUrls: ['./login-new.page.scss'],
})
export class LoginNewPage implements OnInit {
  user=new Users()
  constructor(private _route:Router,private loginservice:UsersService) { }

  ngOnInit() {
  }
  
  CheckData()
  {
    if (this.user.Name=='' && this.user.Password=='')
    {
      alert("Please Fill The Fields")
    }
    else
    {

  
      this.loginservice.LoginService(this.user).subscribe((data:any)=>{
        if (data){
          
if (Object.keys(data).length>0 && data[0].Type===0)
{
  
  this._route.navigate(["/dashboard"])
localStorage.setItem('uname',JSON.stringify(this.user.Username))
console.log(  localStorage.getItem('uname'))
  //console.log(data[0]);
}
else if(Object.keys(data).length>0 && data[0].Type==1 )
{
  this._route.navigate(["/home"])
 // console.log(data[0].type);
}
else{
  alert("User Doesnot Exist")
  //console.log(data[0]);
 // console.log(data[0].Type);
}

         
         
        }
       
      })
     {
      
     }
       
    
  }
}



}
