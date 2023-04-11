import { Component, OnInit } from '@angular/core';
import { ViewEmployeeService } from 'Service/view-employee.service';
import { Users } from '../class/employee';
import { EditEmployeePage } from '../edit-employee/edit-employee.page';
import { UsersService } from 'Service/users.service';
import { EditdataService } from 'Service/editdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.page.html',
  styleUrls: ['./view-employee.page.scss'],
})
export class ViewEmployeePage implements OnInit {

public user=new Users
 public EmployeeDetials :any
  constructor(public ViewEmpservice:ViewEmployeeService,public editdataservice:EditdataService,private _route:Router) { 
    this.ViewEmp()

  }

  ngOnInit() {
  }

  //Function for view Employee
private ViewEmp()
{
 
  this.ViewEmpservice.ViewEmployee().subscribe((data:any)=>{
    if(data)
    {
      this.EmployeeDetials=data;
      console.log(data)
    }

  })
}

//Function for Delete Employee
public DeleteEmp(itm:any) 
{
  alert("Deleted")
this.ViewEmpservice.DeleteEmployee(itm).subscribe((data:any)=>{

 this.ViewEmp()
  

})
}

public EditEmployee(itm:any)
{
this.user.Id=itm.Id
this.user.Name=itm.Name
this.user.Email=itm.Email
this.user.Phone=itm.Phone  
this.user.Password=itm.Password
this.user.Username=itm.Username

console.log(this.user)
  this.editdataservice.Update_User(this.user).subscribe((data:any)=>{
    if(data)
    {
      console.log(data)
    }
    console.log(data.Name)
   this.ViewEmp()
   
  })
  }
  
public EditeEmp(itm:any)
{
this._route.navigate(['/edit-employee',
{state:itm.Id,
  Name:itm.Name,
  Email:itm.Email,
  Phone:itm.Phone,
  Un:itm.Username,
Pass:itm.Password}])
}
}


