import { Component, OnInit } from '@angular/core';
import { UsersService } from 'Service/users.service';
import { LaveService } from 'Service/lave.service';
import { Users } from '../class/employee';
import { leave } from '../class/Leave';
import { Console } from 'console';
@Component({
  selector: 'app-leave-report-user',
  templateUrl: './leave-report-user.page.html',
  styleUrls: ['./leave-report-user.page.scss'],
})
export class LeaveReportUserPage implements OnInit {

 public uname=localStorage.getItem('uname');
public user=new Users()
public namefortemp=this.uname?.replace(/[&\/\\#,+()$~%.'":*?<>{}@0-9]/g, '')
public LeaveList:any

  constructor(public leaveservice:LaveService) {
    this.ViewIndividualLeaveReport()
   }

  ngOnInit() {
  }

  ViewIndividualLeaveReport()
  {
    
 console.log(this.uname)
this.leaveservice.GetIndividualReport(this.uname?.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')).subscribe((data)=>{
  
  console.log(data)
  if(data)
  {
   console.log(data)
this.LeaveList=data
console.log(this.LeaveList)

  }
})
  }
}
