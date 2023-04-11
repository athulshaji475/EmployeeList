import { Component, OnInit } from '@angular/core';
import {Users} from '../class/employee' //importing the User class from Users.ts in Class
import {UsersService} from 'Service/users.service' //importing the UsersService class from 
       //user.service in Service folder
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss'],
})
export class EmployeeListPage implements OnInit {

 

  user=new Users();
  userservice: any;

  //declaring the object of class
  
  constructor(public usersservice:UsersService) { 


  }

  ngOnInit() {
  }

  InsertUser()
 {
 
this.usersservice.InsertUser(this.user).subscribe((data:any) =>
 {
  if (data) {
      
    if (data[0].Id> 0 && data[0].Error == 0) {
      alert("Inserted Successfully!");
      
    }
    else {
      alert("Error while Save " + data[0].Error.toString());
    }
  }
  else {
    alert('Error while inserting ');
  }

   })
  
  }

}
