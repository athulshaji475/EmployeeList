import { Component, OnInit } from '@angular/core';
import { LaveService } from 'Service/lave.service';
import { leave } from '../class/Leave';
import { Users } from '../class/employee';



@Component({
  selector: 'app-rejected-leaves',
  templateUrl: './rejected-leaves.page.html',
  styleUrls: ['./rejected-leaves.page.scss'],
})
export class RejectedLEavesPage implements OnInit {
  
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
