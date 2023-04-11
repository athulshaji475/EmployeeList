import { Component, OnInit } from '@angular/core';
import { UsersService } from 'Service/users.service';
import { EditdataService } from 'Service/editdata.service';
import { Users } from '../class/employee';
import { ViewEmployeePage } from '../view-employee/view-employee.page';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html',
  styleUrls: ['./edit-employee.page.scss'],
})
export class EditEmployeePage implements OnInit {
 
id :any
name:any
email:any
phone:any
uname:any
pass:any
  public user=new Users()
 public Values:any
  constructor(public userservice:UsersService,public editdataservice:EditdataService,private route:ActivatedRoute) { 
    this.id=this.route.snapshot.params['state'];
    this.name=this.route.snapshot.params['Name']
     this.email=this.route.snapshot.params['Email']
     this.phone=this.route.snapshot.params['Phone']
     this.uname=this.route.snapshot.params['Un']
     this.pass=this.route.snapshot.params['Pass']
     this.user.Id=this.id
    this.user.Name=this.name
    this.user.Email=this.email
    this.user.Phone=this.phone
    this.user.Username=this.uname
    this.user.Password=this.pass
  }

  ngOnInit() {
    
  }

  








public edit()
{
  
//this.Values=itm
//console.log(itm)
//alert(this.Values.Name)
this.editdataservice.Update_User(this.user).subscribe((data:any)=>{
  if(data)
  {
    if(data[0].id>0)
    {
      alert("Data updated")
    }
  }
})
}

}
